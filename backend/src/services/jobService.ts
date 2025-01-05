import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { Job } from "../types";
import { config } from "dotenv";
config();
const JOBS_FILE = path.join(__dirname, "../../data/jobs.json");
const apiUrl = process.env.UNSPLASH_API_URL;
const query = process.env.UNSPLASH_QUERY;
const accessKey = process.env.UNSPLASH_API_KEY;
export class JobService {
  private async ensureDataDir(): Promise<void> {
    const dir = path.dirname(JOBS_FILE);
    await fs.mkdir(dir, { recursive: true });
  }

  private async readJobs(): Promise<Job[]> {
    try {
      await this.ensureDataDir();
      const data = await fs.readFile(JOBS_FILE, "utf-8");
      return JSON.parse(data);
    } catch {
      await fs.writeFile(JOBS_FILE, JSON.stringify([]));
      return [];
    }
  }

  private async writeJobs(jobs: Job[]): Promise<void> {
    await this.ensureDataDir();
    await fs.writeFile(JOBS_FILE, JSON.stringify(jobs, null, 2));
  }

  async getAllJobs(): Promise<Job[]> {
    return this.readJobs();
  }

  async getJobById(id: string): Promise<Job | null> {
    const jobs = await this.readJobs();
    return jobs.find((job) => job.id === id) || null;
  }

  async createJob(): Promise<Job> {
    const newJob: Job = {
      id: uuidv4(),
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    const jobs = await this.readJobs();
    jobs.push(newJob);
    await this.writeJobs(jobs);

    // Start processing the job
    this.processJob(newJob.id);

    return newJob;
  }

  private async processJob(jobId: string): Promise<void> {
    const delay = this.getRandomDelay();
    await new Promise((resolve) => setTimeout(resolve, delay));

    try {
      const url = `${apiUrl}?query=${query}&client_id=${accessKey}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch food images");
      }
      const data = await response.json();
      const imageUrl = await data.urls?.regular;
      const jobs = await this.readJobs();
      const jobIndex = jobs.findIndex((job) => job.id === jobId);

      if (jobIndex !== -1) {
        jobs[jobIndex] = {
          ...jobs[jobIndex],
          status: "completed",
          completedAt: new Date().toISOString(),
          imageUrl,
        };
        await this.writeJobs(jobs);
      }
    } catch (error) {
      const jobs = await this.readJobs();
      const jobIndex = jobs.findIndex((job) => job.id === jobId);

      if (jobIndex !== -1) {
        jobs[jobIndex] = {
          ...jobs[jobIndex],
          status: "failed",
          completedAt: new Date().toISOString(),
        };
        await this.writeJobs(jobs);
      }
    }
  }

  private getRandomDelay(): number {
    const min = 5;
    const max = 30;
    const step = 5;
    const steps = Math.floor((max - min) / step);
    return (Math.floor(Math.random() * steps) * step + min) * 1000;
  }
}

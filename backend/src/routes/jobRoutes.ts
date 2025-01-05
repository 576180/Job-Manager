import { Router } from "express";
import { JobService } from "../services/jobService";

const router = Router();
const jobService = new JobService();

router.get("/", async (req, res) => {
  try {
    const jobs = await jobService.getAllJobs();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const job = await jobService.getJobById(req.params.id);
    if (!job) {
      return res.send([]);
    }
    res.json([job]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job" });
  }
});

router.post("/", async (req, res) => {
  try {
    const job = await jobService.createJob();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to create job" });
  }
});

export default router;

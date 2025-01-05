"use client";

import { Job } from "@/lib/types";
import { JobCard } from "./JobCard";

interface JobGridProps {
  jobs: Job[];
}

export function JobGrid({ jobs }: JobGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

"use client";

import { Job } from "@/lib/types";
import { Card } from "./ui/card";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {

  return (
    <Card className="p-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-medium">Job ID: {job.id}</span>
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              job.status === "completed"
                ? "bg-green-100 text-green-800"
                : job.status === "failed"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {job.status}
          </span>
        </div>

        <div className="text-sm text-gray-500">
          Created: {new Date(job.createdAt).toLocaleString()}
        </div>

        {job.completedAt && (
          <div className="text-sm text-gray-500">
            Completed: {new Date(job.completedAt).toLocaleString()}
          </div>
        )}

        {job.imageUrl && (
          <img
            src={job.imageUrl}
            alt="Food"
            className="w-full h-48 object-cover rounded-md mt-2"
          />
        )}
      </div>
    </Card>
  );
}

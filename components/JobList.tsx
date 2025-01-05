"use client";
import {
  useFecthjobList,
  useSearchJobById,
} from "../data-hooks/request/useCreateJob";

import { JobGrid } from "./JobGrid";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { SearchBar } from "./SearchBar";
import { CreateJobButton } from "./CreateJobButton";
import { useEffect, useMemo, useState } from "react";
import { useCreateJob } from "../data-hooks/request/useCreateJob";

export function JobList() {
  const [jobId, setJobId] = useState("");

  const { mutate: createJob, isLoading: isCreating } = useCreateJob();
  const [pollingEnabled, setPollingEnabled] = useState(true);
  const {
    data: jobs,
    isLoading,
    isError,
    error,
  } = useFecthjobList(pollingEnabled);

  const { data: searchJob, isLoading: isSearchLoading } =
    useSearchJobById(jobId);

  const handleJobCreated = () => {
    createJob();
    setPollingEnabled(true);
  };

  const handleSearch = (searchTerm: string) => {
    setJobId(searchTerm);
    if (searchTerm === "") {
      setPollingEnabled(true);
    } else {
      setPollingEnabled(false);
    }
  };

  const renderElementList = useMemo(() => {
    if (jobId && searchJob?.data) {
      return searchJob.data;
    }
    return jobs?.data || [];
  }, [jobs?.data, searchJob?.data, jobId]);

  useEffect(() => {
    const allJobsCompleted = jobs?.data?.every(
      (item: { status: string }) => item.status === "completed"
    );

    if (allJobsCompleted) {
      setPollingEnabled(false);
    } else {
      setPollingEnabled(true);
    }
  }, [jobs?.data]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return (
      <ErrorState
        error={error?.message || "Something went wrong"}
        onRetry={() => {
          setPollingEnabled(true);
        }}
      />
    );
  }

  return (
    <div>
      <div className="w-full flex justify-end pb-1.5">
        <CreateJobButton isCreating={isCreating} createJob={handleJobCreated} />
      </div>
      <SearchBar onSearch={handleSearch} inputValue={jobId} />

      <div className="max-h-[550px] overflow-y-auto">
        {renderElementList && renderElementList.length > 0 ? (
          <JobGrid jobs={renderElementList} />
        ) : (
          <div className="w-full h-full flex justify-center items-center text-center">
            <span>{jobId ? "No jobs found" : "No jobs available"}</span>
          </div>
        )}
      </div>  
    </div>
  );
}

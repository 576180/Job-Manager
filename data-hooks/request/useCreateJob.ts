import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createJob,
  getJobList,
  getJobById,
} from "@/config/requests/manageJobs";
const FETCHJOBLIST = "fetchJobList";

export const useCreateJob = () => {
  const queryClient = useQueryClient();
  const { mutate, isError, error, data } = useMutation({
    mutationFn: createJob,
    onError: (error) => {
      console.error("Error creating job:", error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["fetchJobList"] });
    },
  });

  return {
    mutate,
    isLoading: false,
    isError,
    error,
    data,
  };
};

export const useFecthjobList = (pollingEnabled: boolean) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [FETCHJOBLIST],
    queryFn: getJobList,
    refetchInterval: pollingEnabled ? 5000 : false,
    refetchIntervalInBackground: pollingEnabled,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export const useSearchJobById = (id: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fetchJob", id],
    queryFn: () => getJobById(id),
    enabled: !!id,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

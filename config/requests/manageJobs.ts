import request from "../request";

export const createJob = async () => {
  try {
    const { data } = await request.post("/api/jobs");
    return { data };
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};

export const getJobList = async () => {
  try {
    const { data } = await request.get("/api/jobs");
    return { data };
  } catch (error) {
    console.error("Error fetching job list:", error);
    throw error;
  }
};

export const getJobById = async (id: string) => {
  try {
    const { data } = await request.get(`/api/jobs/${id}`);
    return { data };
  } catch (error) {
    console.error("Error fetching job list:", error);
    throw error;
  }
};

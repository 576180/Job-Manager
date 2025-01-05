import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REQUEST_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 400:
          console.error("Bad Request:", data);
          break;
        case 401:
          console.error("Unauthorized:", data);
          break;
        case 404:
          console.error("Not Found:", data);
          break;
        default:
          console.error("Error:", data);
          break;
      }
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default request;

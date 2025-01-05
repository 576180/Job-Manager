import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: (attemptIndex) =>
      Math.min(attemptIndex > 1 ? 2 ** attemptIndex * 1000 : 1000, 30 * 1000),
  },
  mutations: {
    retry: 1,
  },
});

export default queryClient;

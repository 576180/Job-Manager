"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../config/queryClientProvider";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default Providers;

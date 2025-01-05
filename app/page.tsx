import { JobList } from "@/components/JobList";
import Providers from "@/providers/index";

export default function Home() {
  return (
    <Providers>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Food Image Job Manager
        </h1>
        <JobList />
      </div>
    </Providers>
  );
}

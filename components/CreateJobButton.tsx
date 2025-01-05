import { Button } from "@/components/ui/button";
import { PlusIcon, Loader2 } from "lucide-react";

interface CreateJobButtonProps {
  createJob: () => void;
  isCreating: boolean;
}

export function CreateJobButton({
  createJob,
  isCreating,
}: CreateJobButtonProps) {
  return (
    <Button onClick={createJob} disabled={isCreating} className="min-w-[160px]">
      {isCreating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating...
        </>
      ) : (
        <>
          <PlusIcon className="mr-2 h-4 w-4" />
          Create New Job
        </>
      )}
    </Button>
  );
}

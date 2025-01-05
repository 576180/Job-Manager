'use client';

import { Button } from './ui/button';
import { RefreshCcw } from 'lucide-react';

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-64 space-y-4">
      <div className="text-red-500 text-center">
        {error}
      </div>
      <Button onClick={onRetry} variant="outline">
        <RefreshCcw className="mr-2 h-4 w-4" />
        Retry Connection
      </Button>
    </div>
  );
}
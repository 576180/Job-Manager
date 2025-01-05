// Common types used across the application
export interface Job {
  id: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  imageUrl?: string;
}

export type JobResponse = {
  id: string;
  status: Job['status'];
  imageUrl?: string;
  createdAt: string;
  completedAt?: string;
};
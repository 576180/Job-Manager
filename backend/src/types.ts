export interface Job {
  id: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  imageUrl?: string;
}
# Job Management System

A full-stack application for managing asynchronous jobs that fetch random food images from Unsplash.

## Features

- Create new jobs
- View all jobs and their statuses
- Search jobs by ID
- Real-time status updates
- Persistent storage using file system
- Random job processing time (5 seconds to 5 minutes)
- Handles network interruptions
- Supports multiple concurrent jobs

## Tech Stack

### Frontend
- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Query for data fetching

### Backend
- Node.js
- Express
- TypeScript
- File-based storage

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The backend will run on http://localhost:3001

### Frontend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on http://localhost:3000

## API Endpoints

- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get a specific job by ID
- `POST /api/jobs` - Create a new job

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── components/
├── lib/
├── app/
└── package.json
```
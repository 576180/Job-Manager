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
- Next.js 14+ with App Router
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
├── app/
└── package.json
```
 ### Time Spent
 ## Frontend
 - Requirement Planning: 2 hours
 - Setting Up Code and Project Structure: 3 hours
 - Component Design: 4 hours
 - API Integration with React Query: 3 hours
 - Styling the UI: 2 hours
 
 ## Backend
 - Requirement Planning: 2 hours
 - Setting Up Code and Project Structure: 2 hours
 - Endpoint Development: 2 hours
 - Developing Logic to Support Multiple Concurrent Jobs: 4 hours

 ## Technical Design Document 

 link : https://docs.google.com/document/d/15ddXaYRzNGKJR18knLmJutsAD21gI0UwRCu06aOUnl0/edit?usp=sharing
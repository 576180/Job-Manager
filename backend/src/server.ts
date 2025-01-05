import express from "express";
import cors from "cors";
import jobRoutes from "./routes/jobRoutes";
import { config } from "dotenv";
config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

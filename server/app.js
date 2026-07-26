import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "ai-decision-journal-server",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`AI Decision Journal API running on port ${PORT}`);
});
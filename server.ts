import dotenv from "dotenv";

// Load environment variables before other imports
dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  console.error("ERROR: OPENAI_API_KEY is not set in environment variables");
  process.exit(1);
}

import cors from "cors";
import express from "express";
import { handleChat } from "./src/api/chat";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const response = await handleChat(message);
    res.json(response);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("Environment variables loaded:", {
    PORT: process.env.PORT || "3001 (default)",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
      ? "****" + process.env.OPENAI_API_KEY.slice(-4)
      : "NOT SET",
  });
});

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { handleChat } from "./api/chat";

// Load environment variables before other imports
dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  console.error("ERROR: OPENAI_API_KEY is not set in environment variables");
  process.exit(1);
}

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS to only allow requests from your frontend domain
const allowedOrigins = [
  "http://localhost:3000",
  "https://edcarey.io", // Update this with your actual Netlify domain
  process.env.FRONTEND_URL, // Add this line to support environment-based frontend URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

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

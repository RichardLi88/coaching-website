import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import lessonRouter from "./routes/lessonRoute.js";
import trainingRouter from "./routes/trainingRoute.js";
import youtubeRouter from "./routes/youtubeRoute.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.use("/api/user", authRouter);
app.use("/api/lessons", lessonRouter);
app.use("/api/training", trainingRouter);
app.use("/api/youtube", youtubeRouter);

app.listen(5000, () => {
  connectDB();
  console.log("Connected to https://webdev-2kdh.onrender.com");
});

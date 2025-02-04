import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import authRouter from "./routes/authRoute.js";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/user", authRouter);

app.listen(5000, () => {
  connectDB();
  console.log("Connected to http://localhost:5000");
});

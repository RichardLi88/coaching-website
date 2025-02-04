import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

const app = express();
dotenv.config();

app.listen(5000, () => {
  connectDB();
  console.log("Connected to http://localhost:5000");
});

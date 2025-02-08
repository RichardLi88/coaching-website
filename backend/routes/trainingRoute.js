import express from "express";
import {
  createTrainingLog,
  getTrainingChart,
  getTrainingHistory,
  validateTrainingLog,
} from "../controllers/trainingController.js";
import { verify } from "../utility/jwtAuth.js";

const trainingRouter = express.Router();

trainingRouter.get("/fetch/:period", verify, getTrainingChart);
trainingRouter.get("/get/history", verify, getTrainingHistory);
trainingRouter.post("/create", verify, validateTrainingLog, createTrainingLog);
//trainingRouter.put("/edit");
//trainingRouter.delete("/delete");

export default trainingRouter;

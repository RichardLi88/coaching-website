import express from "express";
import {
  createTrainingLog,
  validateTrainingLog,
} from "../controllers/trainingController.js";
import { verify } from "../utility/jwtAuth.js";

const trainingRouter = express.Router();

trainingRouter.get("/fetch/:id");
trainingRouter.post(
  "/create/:id",
  verify,
  validateTrainingLog,
  createTrainingLog
);
//trainingRouter.put("/edit");
//trainingRouter.delete("/delete");

export default trainingRouter;

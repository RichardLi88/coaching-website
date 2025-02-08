import express from "express";
import {
  createTrainingLog,
  validateTrainingLog,
} from "../controllers/trainingController.js";
import { verify, verifyUser } from "../utility/jwtAuth.js";

const trainingRouter = express.Router();

trainingRouter.get("/fetch/:id");
trainingRouter.post(
  "/create/:id",
  verify,
  verifyUser,
  validateTrainingLog,
  createTrainingLog
);
//trainingRouter.put("/edit");
//trainingRouter.delete("/delete");

export default trainingRouter;

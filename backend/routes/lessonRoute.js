import express from "express";
import { adminVerify, verify } from "../utility/jwtAuth.js";
import {
  createLesson,
  deleteLesson,
  getLessons,
  updateLesson,
} from "../controllers/lessonController.js";

const lessonRouter = express.Router();

lessonRouter.get("/fetch", getLessons);
lessonRouter.put("/update/:id", verify, adminVerify, updateLesson);
lessonRouter.post("/create", createLesson);
lessonRouter.delete("/delete/:id", verify, adminVerify, deleteLesson);

export default lessonRouter;

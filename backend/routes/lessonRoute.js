import express from "express";
import { adminVerify, verify } from "../utility/jwtAuth.js";
import {
  createLesson,
  deleteLesson,
  getBestLesson,
  getLessons,
  updateClickedLesson,
  updateLesson,
} from "../controllers/lessonController.js";
import { submitInquiry } from "../controllers/inquiryController.js";

const lessonRouter = express.Router();

lessonRouter.get("/fetch", getLessons);
lessonRouter.get("/fetch/best", getBestLesson);
lessonRouter.put("/update/:id", verify, adminVerify, updateLesson);
lessonRouter.put("/update/clicked/:id", updateClickedLesson);
lessonRouter.post("/create", verify, adminVerify, createLesson);
lessonRouter.delete("/delete/:id", verify, adminVerify, deleteLesson);
lessonRouter.post("/submit", submitInquiry);

export default lessonRouter;

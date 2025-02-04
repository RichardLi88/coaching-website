import express from "express";
import { login, signUp } from "../controllers/authController.js";
const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
//authRouter.delete("/delete");

export default authRouter;

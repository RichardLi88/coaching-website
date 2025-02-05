import express from "express";
import {
  login,
  logout,
  signUp,
  validateSignUp,
} from "../controllers/authController.js";
import { verify } from "../utility/jwtAuth.js";

const authRouter = express.Router();

authRouter.post("/signup", validateSignUp, signUp);
authRouter.post("/login", login);
authRouter.post("/logout", verify, logout);

export default authRouter;

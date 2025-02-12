import express from "express";
import {
  getUsers,
  login,
  logout,
  signUp,
  validateSignUp,
} from "../controllers/authController.js";
import { adminVerify, verify } from "../utility/jwtAuth.js";

const authRouter = express.Router();

authRouter.post("/signup", validateSignUp, signUp);
authRouter.post("/login", login);
authRouter.post("/logout", verify, logout);
authRouter.get("/get", verify, adminVerify, getUsers);

export default authRouter;

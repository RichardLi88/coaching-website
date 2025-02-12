import express from "express";
import {
  deleteUser,
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
authRouter.delete("/delete/:id", verify, deleteUser);

export default authRouter;

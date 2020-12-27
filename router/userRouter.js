import express from "express";
import { route } from "../routes";
import { login, signup } from "../controller/userController";

const userRouter = express();

userRouter.get(route.login, login);
userRouter.get(route.signup, signup);

export default userRouter;
import express from "express";
import { route } from "../routes";
import { login, 
    signup, 
    postSignup, 
    postLogin } from "../controller/userController";

const userRouter = express();

userRouter.get(route.login, login);
userRouter.post(route.login, postLogin);

userRouter.get(route.signup, signup);
userRouter.post(route.signup, postSignup);

export default userRouter;
import express from "express";
import passport from "passport";
import { route } from "../routes";
import { login, login2, me,
    upload,
    postLogin2 } from "../controller/userController";
import { onlyPrivate, onlyPublic } from "../middleware";


const userRouter = express.Router();

userRouter.get(route.login, onlyPublic, login);
/* userRouter.post(route.login, postLogin); */

userRouter.get(route.me, me);

export const postLogin = passport.authenticate("local", {successRedirect: '/', failureRedirect: "/signup"})

export default userRouter;
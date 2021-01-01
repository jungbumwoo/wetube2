import express from "express";
import { route } from "../routes";
import { login, login2,
    signup, 
    postSignup, 
    postLogin, postLogin2 } from "../controller/userController";

import passport from "passport";
let LocalStrategy = require('passport-local').Strategy;

const userRouter = express();

userRouter.get(route.login, login);
userRouter.post(route.login, 
    passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/user/login' })
    );

userRouter.get(route.login2, login2);
userRouter.post(route.login2, postLogin2);

userRouter.get(route.signup, signup);
userRouter.post(route.signup, postSignup);

export default userRouter;
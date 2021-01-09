import express from "express";
import passport from "passport";
import { route } from "../routes";
import { login, upload, login2,
    signup, 
    postSignup, 
    postLogin, postLogin2 } from "../controller/userController";


const userRouter = express();

userRouter.get(route.login, login);
userRouter.post(route.login, passport.authenticate('local', { failureRedirect: '/user/login'}),
    function(req, res) {
        res.redirect('/');
    }
);

userRouter.get(route.signup, signup);
userRouter.post(route.signup, postSignup);

userRouter.get(route.upload, upload);


export default userRouter;
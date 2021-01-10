import express from "express";
import passport from "passport";
import { route } from "../routes";
import { login, login2,
    signup, 
    postSignup, 
    upload,
    userDetail,
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

userRouter.get(route.userDetail, userDetail);


export default userRouter;
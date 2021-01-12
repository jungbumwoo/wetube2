import express from "express";
import passport from "passport";
import { route } from "../routes";
import { login, login2,
    signup, 
    postSignup, 
    upload,
    postLogin, postLogin2 } from "../controller/userController";


const userRouter = express.Router();

userRouter.get(route.login, login);
userRouter.post(route.login, passport.authenticate('local', { failureRedirect: '/user/login'}),
    function(req, res) {
        res.redirect('/');
    }
);

userRouter.get(route.signup, signup);
userRouter.post(route.signup, postSignup);





export default userRouter;
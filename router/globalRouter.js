import express from "express";
import passport from "passport";
import { route } from "../routes"; 
import { home, logout, userDetail } from "../controller/userController";
import { search } from "../controller/videoController";

const globalRouter = express.Router();

globalRouter.get('/', home);

globalRouter.get(route.userDetail(), userDetail);

globalRouter.get(route.search, search);

globalRouter.get('/auth/facebook', passport.authenticate('facebook'));
globalRouter.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/users/login'}),
    function(req, res) {
        res.redirect('/');
});

globalRouter.get('/auth/github', passport.authenticate('github'));
globalRouter.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/users/login'}), 
    function (req, res) {
        res.redirect('/');
});

globalRouter.get(route.logout, logout);

export default globalRouter;
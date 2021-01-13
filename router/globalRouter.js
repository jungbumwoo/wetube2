import express from "express";
import passport from "passport";
import { route } from "../routes"; 
import { home, logout, userDetail } from "../controller/userController";
import { search } from "../controller/videoController";
import { onlyPrivate, onlyPublic } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(route.home, home);

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
/* userDetail() 얘를 위로 올리면 다른게 죽어버리고 여기로 다 가버리는듯? */
globalRouter.get(route.userDetail(), onlyPrivate, userDetail);

export default globalRouter;
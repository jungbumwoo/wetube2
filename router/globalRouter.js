import express from "express";
import passport from "passport";
import { route } from "../routes"; 
import { home } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get('/', home);

globalRouter.get('/auth/facebook', passport.authenticate('facebook'));
globalRouter.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/users/login'}),
    function(req, res) {
        res.redirect('/');
    });

globalRouter.get('/auth/github', passport.authenticate('github'));
globalRouter.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    }
    )

export default globalRouter;
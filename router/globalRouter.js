import express from "express";
import passport from "passport";
import { route } from "../routes"; 
import { home, logout, userDetail,
    signup, postSignup } from "../controller/userController";
import { getSearch, postSearch } from "../controller/videoController";
import { onlyPrivate, onlyPublic } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(route.home, home);

globalRouter.get('/auth/facebook', passport.authenticate('facebook'));
globalRouter.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/users/login'}),
    function(req, res) {
        res.redirect('/');
});

globalRouter.get('/auth/github', passport.authenticate('github'));
globalRouter.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/users/login'}), 
    function (req, res) {
        console.log(`globalRouter github callback`);
        console.log(req.user);
        res.redirect('/');
});

globalRouter.get(route.logout, logout);

globalRouter.get(route.search, getSearch);
globalRouter.post(route.search, postSearch);

globalRouter.get(route.signup, signup);
globalRouter.post(route.signup, postSignup);
/* 
userDetail() 얘를 위로 올리면 다른게 죽어버리고 여기로 다 가버리는듯? 
globalRouter.get(route.userDetail(), onlyPrivate, userDetail);
*/
export default globalRouter;
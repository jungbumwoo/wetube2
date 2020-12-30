import { User } from "../models";

export const home = (req, res) => {
    res.render("home");
};

export const login = (req, res) => {
    res.render("login");
};

export const postLogin = (req, res) => {
    console.log(req.body.uname);
    console.log(req.body.password);
    try {
        let isit = User.find({name:`${req.body.uname}`});
        console.log(isit);
    } catch (err) {
        console.log(err)
    }

};

export const signup = (req, res) => {
    res.render("signup");
};

export const postSignup = (req, res) => {
    console.log(req);
};
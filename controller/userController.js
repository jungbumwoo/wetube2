import User from "../models";


export const home = (req, res) => {
    res.render("home");
};

export const login = (req, res) => {
    res.render("login");
};

export const postLogin = (req, res) => {
    console.log(req.body.uname);
    console.log(req.body.pwd);
};

export const login2 = (req, res) => {
    res.render("login2");
};

export const postLogin2 = (req, res) => {
    console.log("postLogin2");
}

export const signup = (req, res) => {
    res.render("signup");
};

export const postSignup = (req, res) => {
    console.log(req.body);
};
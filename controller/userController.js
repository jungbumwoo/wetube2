export const home = (req, res) => {
    res.render("home");
};

export const login = (req, res) => {
    res.render("login");
};

export const postLogin = (req, res) => {
    console.log(req.body.uname);
}

export const signup = (req, res) => {
    res.render("signup");
};

export const postSignup = (req, res) => {
    console.log(req);
};
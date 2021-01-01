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
    try {
        
        if (isit) {
            console.log("Already registerd name");
        } else {
            let newUser = new User({
                name: req.body.uname,
                pwd: req.body.password
            });
    
            User.create(newUser, (err, user) => {
                if (err) throw err;
                console.log(user);
            })
            res.redirect("/");
        }
    } catch (err) {
        console.log(err);
    }

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
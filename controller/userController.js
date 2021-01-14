import User from "../models/User";
import Video from "../models/Video";

export const home = (req, res) => {
    res.render("home");
};

export const login = (req, res) => {
    res.render("login");
};

export const postLogin = (req, res) => {
    
};

export const signup = (req, res) => {
    res.render("signup");
};

export const postSignup = async(req, res) => {
    const { body : { username, password, password2 }} = req;
    console.log(username, password, password2);
    if ( password != password2) {
        console.log("password and password2 is not correct");
        res.resdirect("/user/signup");
    } else {
        try {
            let newUser = { username };
            User.register(newUser, password);
            console.log("여기여기 try");
            res.redirect("/");
        } catch(err) {
            res.redirect("/user/signup");
        }
    }
};

export const me = async (req, res) => {
    try {
        let creatorVideos = await Video.find({creator: req.user.id});
        /*
        Video.find({creator: req.user.id}).populate('creator').exec(
            function (err, video){
                if(err) return handleError(err);
                console.log()
                console.log("me")
                console.log(video.creator);
            }
        );*/
        res.render("me", { creatorVideos });
    } catch(err) {
        console.log(err);
        res.render("home");
    };
};

export const logout = (req, res) => {
    req.logout();
    res.redirect("/");
};

export const facebookLoginCallback = async () => {
    
};
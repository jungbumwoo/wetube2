import User from "../models/User";
import Video from "../models/Video";

export const home = async(req, res) => {
    try {
        let entireVideo = await Video.find({}).sort({ "_id": -1});
        res.render("home", {entireVideo});
    } catch(err) {
        console.log(err);
        res.render("home", { entireVideo: [] });
    }
};

export const login = (req, res) => {
    res.render("login");
};

export const signup = (req, res) => {
    res.render("signup");
};

export const postSignup = async(req, res) => {
    const { body : { username, email, password, password2 }} = req;
    if ( password != password2) {
        console.log("password and password2 is not correct");
        res.render(route.signup);
    } else {
        try {
            let newUser = { username, email };
            User.register(newUser, password);
            console.log("postSignup/userController try");
            res.redirect("/");
        } catch(err) {
            console.log(err);
            res.redirect("/user/signup");
        }
    }
};

export const me = async (req, res) => {
    console.log("me");
    console.log(req.user);
    try {
        let creatorVideos = await Video.find({creator: req.user._id});
        /*
        Video.find({creator: req.user.id}).populate('creator').exec(
            function (err, video){
                if(err) return handleError(err);
                console.log()
                console.log("me")
                console.log(video.creator);
            }
        );
        */
        res.render("me", { creatorVideos });
    } catch(err) {
        console.log(err);
        res.redirect("/");
    };
};

export const logout = (req, res) => {
    req.logout();
    res.redirect("/");
};

export const facebookLoginCallback = async () => {
    
};
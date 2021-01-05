import dotenv from "dotenv";
import passport from "passport";
import FacebookStrategy from "passport-facebook";
const GitHubStrategy = require('passport-github').Strategy;
const LocalStrategy = require('passport-local').Strategy;
import User from "./models";
dotenv.config();


passport.use(User.createStrategy());

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function(err, user) {
            return cb(err, user);
        });
    }
));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `http://localhost:3000${process.env.GITHUB_CALLBACK_URL}`
    },
    async function (accessToken, refreshToken, profile, cb) {
        let { email } = profile;
        try {
            // 이미 유저인지 체크
            let isUser = await User.findOne({ email });
            console.log(isUser);
            if (isUser) {
                // 이미 유저면 로그인.
                console.log("true logic");
                return cb(null, isUser);
            } else {
                // 이미 유저 아니면 가입 후 로그인
                let newUser = await User.create({ githubId: profile.id, username: profile.username, email: profile.email });
                console.log(newUser);
                // return cb(err, newUser);
            }
        } catch(err) {
            console.log(err)
        }
        /*
        User.findOrCreate({ githubId: profile.id}, function (err, user) {
            return cb(err, user);
        });
        */
    }
));

 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


/*
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username}, function (err, user){
            console.log(user);
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: '존재하지 않는 아이디입니다.'}); }
            return user.comparePassword(password, (passError, isMatch) => {
                if (isMatch) {
                    console.log("isMatch is true here");
                    return done(null, user);
                }
                console.log("isMatch is not true");
                return done(null, false, { message : "incorrect password"});
            });
        });
    }
));
 */


import passport from "passport";
const LocalStrategy = require('passport-local').Strategy;
import User from "./models";

passport.use(User.createStrategy());

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

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

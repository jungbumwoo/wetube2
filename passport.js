import passport from "passport";
const LocalStrategy = require('passport-local').Strategy;
import User from "./models";

passport.use(User.createStrategy());

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username}, function (err, user){
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: '존재하지 않는 아이디입니다.'}); }
            if (!user.validPassword(password)) { return done(null, false, { message: '비밀번호가 틀렸습니다.'}); }
            return done(null, user);
        });
    }
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

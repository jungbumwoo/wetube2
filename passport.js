import passport from "passport";
let LocalStrategy = require('passport-local').Strategy;

import User from "./models";

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username}, function (err, user) {
            if (err) { return done(err)}
            if (!user) {
                console.log("!user / passport.js");
                return done(null, false, { message: 'Incorrect username.'});
            }
            if (!user.validPassword(password)) {
                console.log("!user.validPassword at passport.js");
                return done(null, false, { message: 'Incorrect password.'});
            }
            return done(null, user);
        })
    }
));

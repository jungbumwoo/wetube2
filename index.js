import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";

import "./db";
import "./passport";

import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import { route } from "./routes";

dotenv.config();

const PORT = 3000;
const app = express();
const CookieStore = MongoStore(session);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cookieParser());
app.use(helmet());

app.use(session({
    secret: process.env.MONGOSTORE_COOKIE,
    resave: false,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
}))

app.use(passport.initialize());
app.use(passport.session());

export const localMiddleware = (req, res, next) => {
    res.locals.loggedUser = req.user || null;
    res.locals.route = route;
    next();
};


app.use(localMiddleware);

app.set('view engine', 'pug');

/*
let MongoClient = require('mongodb').MongoClient;

let url = process.env.DB2;

MongoClient.connect(url, function(err, db) {
    console.log("Connected");
        db.close();
});
*/

app.use(route.home, globalRouter);
app.use(route.user, userRouter);

app.listen(PORT, () => {
    console.log(`✅ app listening at http://localhost:${PORT}`);
});

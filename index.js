import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import flash from "connect-flash";
import helmet from "helmet";
import mongoose from "mongoose";
import path from "path";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";

import "./db";
import "./passport";

import { localMiddleware } from "./middleware";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import { route } from "./routes";


dotenv.config();

const PORT = 3000;
const app = express();
const CookieStore = MongoStore(session);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cookieParser());
app.use(helmet());
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(session({
    secret: process.env.MONGOSTORE_COOKIE,
    resave: false,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
}));

app.set('view engine', 'pug');

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use(localMiddleware);


app.use(route.home, globalRouter);
app.use(route.user, userRouter);
app.use(route.videos, videoRouter);

app.listen(PORT, () => {
    console.log(`✅ app listening at http://localhost:${PORT}`);
});

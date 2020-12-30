import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import helmet from "helmet";

import "./db";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import { route } from "./routes";

dotenv.config();

const PORT = 3000;
const app = express();

app.use(cookieParser());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.set('view engine', 'pug');

let MongoClient = require('mongodb').MongoClient;

let url = process.env.DB2;

MongoClient.connect(url, function(err, db) {
    console.log("Connected");
        db.close();
});

app.use(route.home, globalRouter);
app.use(route.user, userRouter);


app.listen(PORT, () => {
    console.log(`✅ app listening at http://localhost:${PORT}`);
});

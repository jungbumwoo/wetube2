import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import { route } from "./routes";

const PORT = 3000;
const app = express();

app.use(cookieParser());
app.use(helmet());

app.set('view engine', 'pug');

let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost/wetube2';

MongoClient.connect(url, function(err, db) {
    console.log("Connected");
        db.close();
});

app.use(route.home, globalRouter);
app.use(route.user, userRouter);


app.listen(PORT, () => {
    console.log(`✅ app listening at http://localhost:${PORT}`);
});

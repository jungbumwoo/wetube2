import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import globalRouter from "./router/globalRouter";

const PORT = 3000;
const app = express();

app.use(cookieParser());
app.use(helmet());

app.use('/', globalRouter);

app.listen(PORT, () => {
    console.log(`✅ app listening at http://localhost:${PORT}`);
});

import express from "express";

const globalRouter = express.Router();

globalRouter.get('/', (req, res, next) => {
    res.send("Hi");
    console.log("what the what global router / ");
    /*res.render("index", )*/
});

export default globalRouter;
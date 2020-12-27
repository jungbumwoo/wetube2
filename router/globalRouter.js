import express from "express";
import { route } from "../routes"; 
import { home } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get('/', home);

export default globalRouter;
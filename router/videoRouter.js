import express from "express";
import multer from "multer";
import { route } from "../routes";
import { upload, postUpload } from "../controller/videoController";
import { onlyPrivate, onlyPublic } from "../middleware";

const multerUpload = multer({ dest: 'uploads/ '});

const videoRouter = express.Router();

videoRouter.get(route.upload, upload);
videoRouter.post(route.upload, multerUpload.single('avatar'), postUpload);

export default videoRouter;
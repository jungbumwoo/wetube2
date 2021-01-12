import express from "express";
import { route } from "../routes";
import { upload, postUpload } from "../controller/videoController";
import { onlyPrivate, onlyPublic, videoMulter } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(route.upload, onlyPrivate, upload);
videoRouter.post(route.upload, videoMulter, postUpload);

export default videoRouter;
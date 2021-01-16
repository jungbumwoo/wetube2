import { route } from "./routes";
import multer from "multer";

let videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname +  '-' + Date.now());
    }
})

const multerUpload = multer({ storage: videoStorage, limits: {fileSize: 1024 * 1024 * 1024}});

export const videoMulter = multerUpload.single('videoFile');
    

export const localMiddleware = (req, res, next) => {
    res.locals.loggedUser = req.user || null;
    res.locals.route = route;
    res.locals.siteName = "Wetube";
    next();
};

export const onlyPrivate = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect("/user/login");
    }
};

export const onlyPublic = (req, res, next) => {
    if (req.user) {
        res.redirect(route.home);
    } else {
        next();
    }
};

import { route } from "./routes";
import multer from "multer";

let videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname +  '-' + Date.now());
    }
    /*
    fileFilter: function(req, file, cb) {
        
        try {

        } catch (err) {
            cb(new Error('Multer Error'));
        }
    }
    */
})

const multerUpload = multer({ storage: videoStorage });

export const videoMulter = multerUpload.single('video');


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

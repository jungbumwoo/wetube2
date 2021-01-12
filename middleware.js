import { route } from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.loggedUser = req.user || null;
    res.locals.route = route;
    next();
};

export const onlyForUser = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect("/user/login");
    }
};

export const forEveryone = (req, res, next) => {

};

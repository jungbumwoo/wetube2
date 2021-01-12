import { route } from "./routes";

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

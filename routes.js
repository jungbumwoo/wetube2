import { upload } from "./controller/userController";

/*global*/
const HOME = "/";
const LOGOUT = "/logout";
/*user*/
const PROFILE = "/profile"
const LOGIN = "/login"
const LOGIN2 = "/login2"
const USER = "/user"
const SIGNUP = "/signup"
const UPLOAD = "/upload"
/**/
export const route = {
    /*global*/
    home: HOME,
    /*user*/
    user: USER,
    profile: PROFILE,
    login: LOGIN,
    login2: LOGIN2,
    signup: SIGNUP,
    logout: LOGOUT,
    upload: UPLOAD,
    userDetail: (id) => {
        if (id) {
            return `/userdetail/${id}`
        } else {
            return route.login
        }
    }
    /*video*/
}
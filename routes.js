/*global*/
const HOME = "/";
const LOGOUT = "/logout";
const SEARCH = "/search";
const USER_DETAIL = "/:id";
/*user*/
const PROFILE = "/profile"
const LOGIN = "/login"
const LOGIN2 = "/login2"
const USER = "/user"
const SIGNUP = "/signup"
const UPLOAD = "/upload"
/*videos*/
const VIDEOS = "/videos"


/**/
export const route = {
    /*global*/
    home: HOME,
    search: SEARCH,
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
            return `/${id}`
        } else {
            return USER_DETAIL;
        }
    },
    /*video*/
    videos: VIDEOS

}
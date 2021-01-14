/*global*/
const HOME = "/";
const LOGOUT = "/logout";
const SEARCH = "/search";
const USER_DETAIL = "/:id";
/*user*/
const LOGIN = "/login"
const LOGIN2 = "/login2"
const ME = "/me"
const USER = "/user"
const SIGNUP = "/signup"
const UPLOAD = "/upload"
/*videos*/
const VIDEOS = "/videos"
const VIDEO_DETAIL = "/:id";


/**/
export const route = {
    /*global*/
    home: HOME,
    search: SEARCH,
    /*user*/
    user: USER,
    login: LOGIN,
    login2: LOGIN2,
    logout: LOGOUT,
    me: ME,
    upload: UPLOAD,
    userDetail: (id) => {
        if (id) {
            return `/${id}`
        } else {
            return USER_DETAIL;
        }
    },
    signup: SIGNUP,
    /*video*/
    videos: VIDEOS,
    videoDetail: (id) => {
        if (id) {
            return `/${id}`
        } else {
            return VIDEO_DETAIL;
        }
    }

}
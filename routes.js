/*global*/
const HOME = "/";
const LOGOUT = "/logout";
const SEARCH = "/search";
const USER_DETAIL = "/:id";
/*user*/
const PROFILE = "/:id";
const LOGIN = "/login"
const LOGIN2 = "/login2"
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
    profile: PROFILE,
    login: LOGIN,
    login2: LOGIN2,
    signup: SIGNUP,
    logout: LOGOUT,
    profile: (id) => {
        if (id) {
            return `/${id}`
        } else {
            return PROFILE;
        }
    },
    upload: UPLOAD,
    userDetail: (id) => {
        if (id) {
            return `/${id}`
        } else {
            return USER_DETAIL;
        }
    },
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
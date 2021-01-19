import Video from "../models/Video";
import { route } from "../routes";

export const getSearch = async (req, res) => {
    let { query: { term }} = req;
    let searchedVideo = [];
    try {
        searchedVideo = await Video.find({
            title: { $regex: term, $options: "i"}
        });
    } catch(err) {
        console.log(err);
    }
    res.render("search", { pageTitle: "Search", term, searchedVideo})
};

export const postSearch = (req, res) => {
    console.log(req);
};

export const upload = (req, res) => {
    res.render("upload");
};

export const videoDetail = async(req, res) => {
    const { params: { _id } } = req;
    try {
        let detailVideo = await Video.findOne({id: _id}).populate("creator");
        console.log('at videodetail');
        console.log(detailVideo);
        res.render("videoDetail", { detailVideo });
    } catch(error) {
        console.log(error);
        res.redirect("/");
    }
};

export const postUpload = async (req, res) => {
    console.log("postUpload at videoController");
    console.log(req.user);
    const { body : { title, description }} = req;
    const { file } = req;
    try {
        let newVideo = await Video.create({
            title,
            description,
            fileUrl: file.path,
            creator: req.user._id
        });
        let newVIdeoId = newVideo.id;
        req.user.videos.push(newVIdeoId);
        req.user.save();
        res.redirect(`/user${route.me}`);
    } catch(err) {
        console.log("postUpload Err at videoController");
        console.log(err);
        res.render("home");
    };
};

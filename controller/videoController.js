import Video from "../models/Video";
import { route } from "../routes";

export const search = (req, res) => {
    console.log("search At videoController");
};

export const upload = (req, res) => {
    res.render("upload");
};

export const videoDetail = async(req, res) => {
    const { params: { _id } } = req;
    try {
        let detailVideo = await Video.findOne({id: _id});
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
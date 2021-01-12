import Video from "../models/Video";

export const search = (req, res) => {
    console.log("search At videoController");
}

export const upload = (req, res) => {
    res.render("upload");
}

export const postUpload = async (req, res) => {
    console.log(req.body);
    const { body : { title, description }} = req;
    const { user : { username }} = req;
    let uploadedVideo = {
        title,
        description
    };
    try {
        let newVideo = await Video.create(uploadedVideo);
    } catch(err) {
        console.log(err);
        res.render("home");
    }
    res.render("userDetail");
};
import Video from "../models/Video";

export const search = (req, res) => {
    console.log("search At videoController");
}

export const upload = (req, res) => {
    res.render("upload");
}

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
            creator: req.user.id
        });
        let newVIdeoId = newVideo.id;
        req.user.videos.push(newVIdeoId);
        req.user.save();
        res.render("userDetail");
    } catch(err) {
        console.log("postUpload Err at videoController");
        console.log(err);
        res.render("home");
    };
};
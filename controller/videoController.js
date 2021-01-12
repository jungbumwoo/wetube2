export const search = (req, res) => {
    console.log("search At videoController");
}

export const upload = (req, res) => {
    res.render("upload");
}

export const postUpload = async (req, res) => {
    console.log(JSON.stringify(req.body));
    console.log(req.file);
    res.render("userDetail");
}
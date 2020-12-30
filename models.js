import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    pwd: String,
    date: { type: Date, default: Date.now },
    profile_img: String,
    info: String
});

const model = mongoose.model('User', userSchema);

export default model;
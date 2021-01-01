import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    date: { type: Date, default: Date.now },
    profile_img: String,
    info: String
});

const model = mongoose.model('User', userSchema);
console.log(model);

export default model;
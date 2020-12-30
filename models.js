import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    pwd: String,
    date: { type: Date, default: Date.now },
    profile_img: String,
    info: String
});

export const User = mongoose.model('User', userSchema);
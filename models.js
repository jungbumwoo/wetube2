import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    date: { type: Date, default: Date.now },
    profile_img: String,
    info: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.methods.comparePassword = function(inputPassword, cb) {
    console.log(inputPassword);
    console.log(this.password);
    if (inputPassword === this.password) {
        cb(null, true);
    } else {
        cb('error');
    }
};

const model = mongoose.model('User', userSchema);



export default model;
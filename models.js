import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    avatarUrl: String,
    info: String,
    facebookId: Number,
    githubId: Number
});

userSchema.plugin(passportLocalMongoose);
userSchema.methods.comparePassword = function(inputPassword, cb) {
    console.log(this.password);
    if (inputPassword === this.password) {
        cb(null, true);
    } else {
        cb('error');
    }
};

const model = mongoose.model('User', userSchema);



export default model;
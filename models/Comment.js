import mongoose from "mongoose";
import model from "./User";

const CommentSchema = new mongoose.Schema({
    title: String,
    text: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
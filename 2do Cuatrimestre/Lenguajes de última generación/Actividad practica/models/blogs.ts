import mongoose, { Schema, model } from "mongoose";

const blogSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "user" },
    content: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
},
{
    timestamps: true
}
)

export default model("Blog", blogSchema);
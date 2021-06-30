import mongoose from "mongoose"
import Comment from "./Comment"

const PostSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: [true, "Please provide slug for this article"],
  },
  comments: [Comment.schema],
})

export default mongoose.models.Post || mongoose.model("Post", PostSchema)

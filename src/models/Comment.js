import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: [true, "Comment cannot be blank."],
  },
  user: {
    name: String,
    avatar: String,
    email: String,
  },
  post_slug: {
    type: String,
    required: [true, "Post slug is required"],
  },
  commented_at: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema)

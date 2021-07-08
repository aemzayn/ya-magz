import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: [true, "Comment cannot be blank."],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
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

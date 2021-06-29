import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: [true, "Comment cannot be blank."],
  },
  commented_by: {
    type: String,
    required: [true, "Name cannot be blank."],
  },
  user_id: {
    type: String,
    required: [true, "User id is required."],
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

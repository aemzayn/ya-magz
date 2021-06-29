import mongoose from "mongoose"

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide title for this article"],
  },
  slug: {
    type: String,
    required: [true, "Please provide slug for this article"],
  },
})

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema)

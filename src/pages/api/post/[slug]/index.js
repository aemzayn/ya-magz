import dbConnect from "src/utils/dbConnect"
import { getSession } from "next-auth/client"
import { Comment, User, Post } from "@/models/index.js"
import { checkSlug } from "@/libs/api"

const DEV = process.env.NODE_ENV !== "production"

export default async function handler(req, res) {
  const {
    query: { slug },
    method,
  } = req

  await dbConnect()

  const validSlug = await checkSlug(slug)
  if (!validSlug) {
    return res.status(400).json({ error: "Post not found" })
  }

  switch (method) {
    case "GET":
      try {
        let post = await Post.findOne({ slug }).populate("comments.user")
        if (!post) {
          post = new Post({ slug })
        }
        return res.status(200).json({ data: post })
      } catch (error) {
        if (DEV) console.error(error)
        return res.status(500).json({ error, data: null })
      }

    case "POST":
      const session = await getSession({ req })
      if (!session) {
        return res.status(401).json({ error: "Unauthorized", data: null })
      }

      try {
        const user = await User.findOne({ email: session.user.email })
        if (!user) return res.status(400).json({ error: "User not found" })
        let post = await Post.findOne({ slug })
        if (!post) post = await Post.create({ slug })
        let comment = await Comment.create({
          ...req.body,
          user: user._id,
        })
        post.comments.push(comment)
        await post.save()

        const updatedComment = await Comment.findOne({
          _id: comment._id,
        }).populate("user")
        return res.status(200).json({ data: updatedComment })
      } catch (error) {
        if (DEV) console.error(error)
        return res.status(500).json({ error })
      }

    default:
      return res
        .status(400)
        .json({ error: `Error: Unhandled method ${method}` })
  }
}

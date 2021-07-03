import dbConnect from "src/utils/dbConnect"
import { getSession, session } from "next-auth/client"
import Post from "src/models/Post"
import Comment from "src/models/Comment"

export default async function handler(req, res) {
  const {
    query: { slug, commentId },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case "DELETE":
      try {
        const session = await getSession({ req })
        if (!session) {
          return res.status(401).json({ data: null, error: "Unauthorized" })
        }

        let post = await Post.findOne({ slug })
        let comment = await Comment.findById(commentId)

        if (session.user.email !== comment.user.email) {
          return res
            .status(401)
            .json({ error: "Can only delete your own comment.", data: null })
        }

        await comment.remove()

        post.comments = post.comments.filter(
          ({ _id }) => _id.toString() !== commentId
        )

        await post.save()
        return res.status(200).json({ data: true, error: null })
      } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Server Error" })
      }

    default:
      return res
        .status(400)
        .json({ error: `Error: Unhandled method ${method}` })
  }
}

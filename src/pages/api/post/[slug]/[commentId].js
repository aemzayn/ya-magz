import dbConnect from "src/utils/dbConnect"
import { getSession } from "next-auth/client"
import { Comment, Post, User } from "@/models/index"

export default async function handler(req, res) {
  const {
    query: { slug, commentId },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case "DELETE":
      const session = await getSession({ req })

      try {
        if (!session) {
          return res.status(401).json({ error: "Unauthenticated" }).end()
        }

        let post = await Post.findOne({ slug })
        const comment = await Comment.findById(commentId)
        const user = await User.findOne({ email: session.user.email })

        if (user._id?.toString() !== comment.user?.toString()) {
          return res
            .status(403)
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

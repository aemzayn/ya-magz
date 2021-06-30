import dbConnect from "src/utils/dbConnect"
import { getSession } from "next-auth/client"
import Post from "src/models/Post"
import Comment from "src/models/Comment"
import { checkSlug } from "@/lib/posts"

const DEV = process.env.NODE_ENV !== "production"

export default async function handler(req, res) {
  const {
    query: { slug },
    method,
  } = req

  await dbConnect()

  if (!checkSlug(slug)) {
    return res.status(400).json({
      error: `There is no post with slug of '${slug}'`,
      data: null,
    })
  }

  switch (method) {
    case "GET":
      try {
        let post = await Post.findOne({ slug })
        if (!post) post = await Post.create({ slug })
        return res.status(200).json({ data: post })
      } catch (error) {
        if (DEV) console.error(error)
        return res.status(500).json({ error, data: null })
      }

    case "POST":
      try {
        const session = await getSession({ req })
        if (!session) {
          return res.status(401).json({ error: "Unauthorized", data: null })
        }
      } catch (error) {
        if (DEV) console.error(error)
        return res.status(500).json({ error: "Auth error", data: null })
      }

      try {
        let post = await Post.findOne({ slug })
        if (!post) post = await Post.create({ slug })
        let comment = await Comment.create(req.body)
        post.comments.push(comment)
        await post.save()
        return res.status(200).json({ data: post })
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

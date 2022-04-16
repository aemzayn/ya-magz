import dbConnect from "@/utils/dbConnect"
import User from "@/models/User"
import { getSession } from "next-auth/react"

export default async function handler(req, res) {
  await dbConnect()
  const { method } = req
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ error: "Unauthenticated" })
  }

  switch (method) {
    case "GET":
      try {
        const user = await User.findOne({ email: session.user.email })
        return res.json(user)
      } catch (error) {
        console.error(error)
        return res.status(500).json({ error })
      }

    case "PUT":
      // Edit user name
      try {
        const { name, image } = req.body
        await User.findOneAndUpdate(
          { email: session.user.email },
          { name, image }
        )
        return res.status(200).json({ data: true })
      } catch (error) {
        console.error(error)
        return res.status(500).json({ error })
      }
    default:
      console.error(`Unhandled method ${method}`)
      return res.status(500).json({ error: `Unhandled method: ${method}` })
  }
}

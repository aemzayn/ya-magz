import dbConnect from "@/utils/dbConnect"
import User from "@/models/User"

export default async function handler(req, res) {
  await dbConnect()
  try {
    const users = await User.find()
    return res.json(users)
  } catch (error) {
    console.error(error)
    return res.json({ error })
  }
}

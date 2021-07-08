import mongoose from "mongoose"

const Schema = mongoose.Schema

const UserSchema = new Schema({}, { strict: false })
const User = mongoose.models.User || mongoose.model("User", UserSchema, "users")

export default User

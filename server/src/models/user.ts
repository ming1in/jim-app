import { model, Schema } from "mongoose"

import { IUser } from "../interfaces/user"

const userSchema: Schema = new Schema(
  {
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, default: null},
    lastName: {type: String,  default: null},
    goal: {type: String, default: null},
    height: {type: Number, default: null},
    weight: {type: Number, default: null},
    city: {type: String, default: null},
    age: {type: Number, default: null},
    registeredAt: {type: String, default: null},
    gender: {type: String, default: null}
  },
  { timestamps: true }
)

export default model<IUser>("users", userSchema)

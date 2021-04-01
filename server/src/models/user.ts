import { IUser } from "../interfaces/user"
import { model, Schema } from "mongoose"

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<IUser>("User", userSchema)

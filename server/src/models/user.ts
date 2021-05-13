import { IUser } from "../interfaces/user"
import { model, Schema } from "mongoose"

const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    goals: {
      type: String,
      required: true,
    },

    height: {
      type: Number,
      required: true,
    },

    weight: {
      type: Number,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

export default model<IUser>("User", userSchema)

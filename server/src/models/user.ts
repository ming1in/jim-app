import { IUser } from "../interfaces/user"
import { model, Schema } from "mongoose"

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    
    firstName: {
      type: String,
      default: null,
      required: true,
    },

    lastName: {
      type: String,
            default: null,
      required: true,
    },

    goal: {
      type: String,
      default: null,
      required: true,
    },

    height: {
      type: Number,
      default: null,
      required: true,
    },

    weight: {
      type: Number,
      default: null,
      required: true,
    },

    city: {
      type: String,
      default: null,
      required: true,
    },

    age: {
      type: Number,
      default: null,
      required: true,
    },

    gender: {
      type: String,
      default: null,
      required: true,
    }
  },
  { timestamps: true }
)

export default model<IUser>("users", userSchema)

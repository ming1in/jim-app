import { model, Schema } from "mongoose"

import { IWorkout } from "../interfaces/workout"

const workoutSchema: Schema = new Schema(
  {
    exercises: {
      type: Array,
      required: true
    },
    isFavorited: {
      type: Boolean,
      default: false
    },
    userId: {
      type: String,
      required: true
    },
    completedAt: {
      type: String
    },
    title: {
      type: String
    }
  },
  { timestamps: true }
)

export default model<IWorkout>("workout", workoutSchema)

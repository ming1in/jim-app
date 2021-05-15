import { IExercise } from "../interfaces/exercises"
import { model, Schema } from "mongoose"

const exerciseSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
  },
{
  versionKey: false // remove _v value
}
)

export default model<IExercise>("Exercise", exerciseSchema)
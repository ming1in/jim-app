import { Document } from "mongoose"

export interface IExercise extends Document {
    _id: string,
  name: string
  category: string
}
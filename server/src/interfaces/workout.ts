import { Document } from "mongoose"
import { IExercise } from "./exercises"

export interface IWorkout extends Document{
    _id: string,
  exercise: IExercise[],
  isFavorited: boolean,
  userId: string,
  completedAt: string,
  createdAt: string
}
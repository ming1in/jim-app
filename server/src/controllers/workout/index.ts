import { Response, Request } from "express"

import Excercise from '../../models/exercise'
import Workout from "../../models/workout";
import { IUser } from '../../interfaces/user'
import { IExercise } from '../../interfaces/exercises'


export const getExercises = async (req: Request, res: Response): Promise<void> => {
  try {
    const group = req.query.group as string

    const exer = await Excercise.where({ category: group })

    res.status(200).json(exer);
  } catch (error) {
    throw new Error(error);
  }
};


export const addWorkout = async (req: Request, res: Response): Promise<void> => {
  try {
    const exercises = req.body.exercises as IExercise[]
    const currentUser = req.body.currentUser as IUser

    const baseWorkout = {
      isFavorited: false,
      completedAt: null
    }
    
    const newWorkout = new Workout({...baseWorkout, exercises, userId: currentUser._id})
    await newWorkout.save()
    console.log(newWorkout)

    res.status(201).json(newWorkout)
} catch (error) {
      throw new Error(error);
}
}

export const getWorkout = async (req: Request, res: Response): Promise<void> => {
  try {
    const { workoutId } = req.params

    const workout = await Workout.where({ _id: workoutId })
    
    res.status(200).json(workout);
  } catch (error) {
    throw new Error(error);
  }
}

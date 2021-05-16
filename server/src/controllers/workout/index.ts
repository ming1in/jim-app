import { Response, Request } from "express"
import moment from 'moment'
import Excercise from '../../models/exercise'
import Workout from "../../models/workout";
import { IUser } from '../../interfaces/user'
import { IExercise } from '../../interfaces/exercises'
import { IWorkout } from "../../interfaces/workout";


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
    const title = req.body.title as string
    const currentUser = req.body.currentUser as IUser

    const baseWorkout = {
      isFavorited: false,
      completedAt: null
    }
    
    const newWorkout = new Workout({
      ...baseWorkout,
      exercises,
      title,
      userId: currentUser._id
    })

    await newWorkout.save()

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

export const completeWorkout = async (req: Request, res: Response): Promise<void> => {
  try {
    const { workoutId } = req.params

    const workout = (await Workout.find({ _id: workoutId }))[0]
    await workout.updateOne({completedAt: moment().toISOString()})
    
    res.status(200).json(workout);
  } catch (error) {
    throw new Error(error);
  }
}


export const getAllWorkout = async (req: Request, res: Response): Promise<void> => {
try {
    const { userId } = req.params

  const userWorkout = await Workout.find({userId})
  
    res.status(200).json(userWorkout);
} catch (error) {
  throw new Error(error);
}

}
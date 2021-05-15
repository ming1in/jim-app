import { Response, Request } from "express"
import _exercises from './exercises.json'
import Exercise from "../../models/exercise"
import { IExercise } from "../../interfaces/exercises" 

export const seedWorkout = async (req: Request, res: Response): Promise<void> => {
    const exercises = _exercises as IExercise[];
    
    exercises.forEach(async function (value) {
        const temp: IExercise = new Exercise(value);
        await temp.save();
    });
    //res.json(tempEx)
}
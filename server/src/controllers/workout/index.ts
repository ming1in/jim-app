//import axios, { AxiosResponse } from 'axios'
import { Response, Request, json } from "express"
import { IExercise } from '../../interfaces/exercises'

const baseUrl = 'http://localhost:5000';

export const getExercises = async (req: Request, res: Response): Promise<void> => {
  try {

    const group = req.body.group;
    const numExercises = req.body.numExercises;
    // const exercises: AxiosResponse = await axios.get(`${baseUrl}/seed/workout`);
    res.status(200).json(group);
  } catch (error) {
    throw new Error(error);
  }
};
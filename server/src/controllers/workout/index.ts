//import axios, { AxiosResponse } from 'axios'
import { Response, Request, json } from "express"
import { IExercise } from '../../interfaces/exercises'
import Excercise from '../../models/exercises'

const baseUrl = 'http://localhost:5000';

export const getExercises = async (req: Request, res: Response): Promise<void> => {
  try {

    console.log(req.query)

    const group = req.query.group as string
    console.log(group)

    const exer = await Excercise.where({ category: group })

    res.status(200).json(exer);
  } catch (error) {
    throw new Error(error);
  }
};
import axios, { AxiosResponse } from 'axios';
//import { IExercises } from '../interfaces/exercises';

const baseUrl = 'http://localhost:5000';

export const getUsers = async (): Promise<AxiosResponse> => {
  try {
    const users: AxiosResponse = await axios.get(`${baseUrl}/users`);
    return users;
  } catch (error) {
    throw new Error(error);
  }
};
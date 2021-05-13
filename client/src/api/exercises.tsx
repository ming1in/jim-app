import axios, { AxiosResponse } from 'axios';
import { IExercise } from '../interfaces/user';

const baseUrl = 'http://localhost:5000';

export const getUsers = async (): Promise<AxiosResponse> => {
  try {
    const users: AxiosResponse = await axios.get(`${baseUrl}/users`);
    return users;
  } catch (error) {
    throw new Error(error);
  }
};
import { Document } from "mongoose"

export interface IUser extends Document {
  firstName: string,
  lastName: string,
  city: string,
  height: number,
  weight: number,
  age: number,
  gender: string,
  goals: string
}
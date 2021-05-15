import { Document } from "mongoose"
export interface IUser extends Document {
  _id: string,
  email: string
  password: string
  firstName: string,
  lastName: string,
  city: string,
  height: number,
  weight: number,
  age: number,
  gender: string,
  goal: string,
  registeredAt: string
}

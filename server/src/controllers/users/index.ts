import { Response, Request } from "express"
import User from "../../models/user"
import { IUser } from "../../interfaces/user" 

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find()
    res.status(200).json({ users })
  } catch (error) {
    throw error
  }
}

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req

    const updateUser: IUser | null = await User.findByIdAndUpdate(
      { _id: id },
      body
    )

    res.status(200).json(updateUser)
  } catch (error) {
    throw error
  }
}

export { getUsers, updateUser }

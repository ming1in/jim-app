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

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IUser, "firstName" | "lastName" | "city" | "weight" | "height" | "age" | "gender" | "goals">

    const user: IUser = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      city: body.city,
      weight: body.weight,
      height: body.height,
      age: body.age,
      gender: body.gender,
      goals: body.goals
    })

    const newUser: IUser = await user.save()
    const allUsers: IUser[] = await User.find()

    res
      .status(201)
      .json({ message: "User added", user: newUser, users: allUsers })
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
    const allUsers: IUser[] = await User.find()
    res.status(200).json({
      message: "User updated",
      user: updateUser,
      users: allUsers,
    })
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedUser: IUser | null = await User.findByIdAndRemove(
      req.params.id
    )
    const allUsers: IUser[] = await User.find()
    res.status(200).json({
      message: "User deleted",
      user: deletedUser,
      users: allUsers,
    })
  } catch (error) {
    throw error
  }
}

export { getUsers, addUser, updateUser, deleteUser }

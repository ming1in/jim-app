import { Response, Request } from "express"
import User from "../../models/user"
import { IUser } from "../../interfaces/user" 

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    const user = await User.find({ email })
    
    if (user.length === 0) {
      console.log('save user')
      const newUser = new User({ email, password })

      await newUser.save()

      console.log(newUser)
      res.status(201).json(newUser)
    } else {
      res.status(404).json({ message: 'User already exists' });
    }
  } catch (error) {
      res.status(404).json({ message: error });
  }
 }
export const login = async (req: Request, res: Response): Promise<void> => {
    try {
    res.status(201)
      .json({ message: "LOGINING UP AA USER"})
  } catch (error) {
    throw error
  }
}

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
    res.status(201)
      .json({ message: "REGISTERING UP AA USER"})
  } catch (error) {
    throw error
  }
}

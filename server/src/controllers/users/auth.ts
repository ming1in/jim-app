import { Response, Request } from "express"
import User from "../../models/user"
import { IUser } from "../../interfaces/user" 

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    const user = await User.find({ email })
    
    if(user.length !== 0)res.status(404).json('User already exists');

    if (user.length === 0) {
      const newUser = new User({ email, password })
      await newUser.save()
      res.status(201).json(newUser)
    } 
  } catch (error) {
      res.status(404).json({ message: error });
  }
}
 
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    const user = (await User.find({ email }))[0]

    if (!user) res.status(404).json({error: 'User does not exist'})
    if(user.password !== password) res.status(404).json({error: 'Incorrect password'})

    res.status(201).json(user)
  } catch (error) {
    throw error
  }
}

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const currentUser = await User.findById(req.body._id)

    await currentUser?.update({...req.body})

    const updatedCurrentUser = await User.findById(req.body._id)
    console.log(req.body)

    res.status(201).json(updatedCurrentUser)
  } catch (error) {
    throw error
  }
}

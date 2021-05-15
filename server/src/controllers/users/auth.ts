import { Response, Request } from "express"
import User from "../../models/user"

const bcrypt = require('bcryptjs')

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    const user = (await User.find({ email }))[0]

    if (user) res.status(404).json('User already exists');

    const baseUser = {
      firstName: null,
      lastName: null,
      goal: null,
      height: null,
      weight: null,
      city: null,
      age: null,
      registeredAt: null,
      gender: null
    }

    const newUser = new User({ ...baseUser, email, password: bcrypt.hashSync(password, bcrypt.genSaltSync()) })

    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    console.log(error)
      res.status(404).json({ message: error });
  }
}
 
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    const user = (await User.find({ email }))[0]

    if (!user) res.status(404).json({error: 'User does not exist'})

    const match = await bcrypt.compareSync(password, user.password);
    if(!match) res.status(404).json({error: 'Incorrect password'})

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

    res.status(201).json(updatedCurrentUser)
  } catch (error) {
    throw error
  }
}

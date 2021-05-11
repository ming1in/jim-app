import axios from 'axios'
import { IUser } from './interfaces/user'

const baseUrl = 'http://localhost:5000';

const seedUsers = async () => {
  
  const mockUsers: Omit<IUser, '_id'>[] = [
    {
      name: "Ming Lin",
      description: "Some random ass dudes",
      status: false
    },
     {
      name: "Appu Rana",
      description: "Some random ass dudes",
      status: false
    },
      {
      name: "Connie Xu",
      description: "Some random ass dudes",
      status: false
    },
    {
      name: "Megha Mansuria",
      description: "Some random ass dudes",
      status: false
    },
  ]

  try {
    mockUsers.forEach(async (user) => await axios.post(`${baseUrl}/add-user`, user))
    console.log('Successfully seeded users')
  } catch (error) {
    console.log(`Failed to seed user: ${error}`)
  }
}

seedUsers()
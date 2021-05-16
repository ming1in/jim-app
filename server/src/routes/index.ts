import { Router } from "express"

import { login, register, signUp } from "../controllers/users/auth"
import { getUsers, updateUser } from "../controllers/users/index"
import { seedWorkout } from "../controllers/seed/index"
import {
  generateWorkout,
  addWorkout,
  getExercises,
  getWorkout,
  completeWorkout,
  getAllWorkout,
  removeWorkout
} from "../controllers/workout/index"

const router: Router = Router()

router.get("/users", getUsers)
router.post("/edit-user/:id", updateUser)

router.post("/auth/signup", signUp)
router.post("/auth/login", login)
router.post("/auth/register", register)

router.get('/seed/workout', seedWorkout)
router.get("/exercises", getExercises)

router.get('/workouts/all/:userId', getAllWorkout)
router.post('/workouts/add', addWorkout)
router.get('/workouts/:workoutId', getWorkout)
router.post('/workouts/complete/:workoutId', completeWorkout)
router.post('/workouts/gen', generateWorkout)
router.delete('/workouts/del/:workoutId', removeWorkout)


export default router
import { Router } from "express"

import { login, register, signUp } from "../controllers/users/auth"
import { getUsers, updateUser } from "../controllers/users/index"
import { seedWorkout } from "../controllers/seed/index"
import { getExercises } from "../controllers/workout/index"

const router: Router = Router()


router.get("/users", getUsers)

router.post("/edit-user/:id", updateUser)

router.post('/')

router.post("/auth/signup", signUp)

router.post("/auth/login", login)

router.post("/auth/register", register)


router.get('/seed/workout', seedWorkout)

router.post("/exercises", getExercises)

export default router
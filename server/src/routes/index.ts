import { Router } from "express"
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/users/index"
import { seedWorkout } from "../controllers/seed/index"

const router: Router = Router()

router.get("/users", getUsers)

router.post("/add-user", addUser)

router.put("/edit-user/:id", updateUser)

router.delete("/delete-user/:id", deleteUser)

router.get("/", )

router.get('/seed/workout', seedWorkout)

export default router
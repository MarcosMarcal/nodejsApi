import { Router } from "express"
import { UserController } from "./controller/UserController"

const router = Router()

const userController = new UserController()

router.post("/createUser", userController.createUser)

export { router }
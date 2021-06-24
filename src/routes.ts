import { Router } from "express"
import { UserController } from "./controller/UserController"
import { TagController } from "./controller/TagController"
import { ensureAdmin } from "./middleware/ensureAdmin"

const router = Router()

const userController = new UserController()
const tagController = new TagController()

router.post("/createUser", userController.createUser)
router.post("/createTag", ensureAdmin, tagController.createTag)

router.get("/healthCheck", (req, res) => {
    console.log("...healthCheck... running...")
    return res.send("Hello, NLW!")
}) 

export { router }
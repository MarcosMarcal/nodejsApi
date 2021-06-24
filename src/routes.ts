import { Router } from "express"
import { UserController } from "./controller/UserController"
import { TagController } from "./controller/TagController"
import { ensureAdmin } from "./middleware/ensureAdmin"
import { AuthenticateController } from "./controller/AuthenticateController"
import { ComplimentController } from "./controller/ComplimentController"

const router = Router()

const authenticateController = new AuthenticateController()
const userController = new UserController()
const tagController = new TagController()
const complimentController = new ComplimentController()

router.post("/authUser", authenticateController.authenticate)
router.post("/createUser", userController.createUser)
router.post("/createTag", ensureAdmin, tagController.createTag)
router.post("/createCompliment", complimentController.createCompliment)

router.get("/healthCheck", (req, res) => {
    console.log("...healthCheck... running...")
    return res.send("Hello, NLW!")
}) 

export { router }
import { Router } from "express"
import { UserController } from "./controller/UserController"
import { TagController } from "./controller/TagController"
import { ensureAdmin } from "./middleware/ensureAdmin"
import { AuthenticateController } from "./controller/AuthenticateController"
import { ComplimentController } from "./controller/ComplimentController"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated"

const router = Router()

const authenticateController = new AuthenticateController()
const userController = new UserController()
const tagController = new TagController()
const complimentController = new ComplimentController()

router.post("/authUser", authenticateController.authenticate)
router.post("/createUser", userController.createUser)
router.post("/createTag", ensureAuthenticated, ensureAdmin, tagController.createTag)
router.post("/createCompliment", ensureAuthenticated, complimentController.createCompliment)

router.get("/healthCheck", (req, res) => {
    console.log("...healthCheck... running...")
    return res.send("Hello, NLW!")
}) 

export { router }
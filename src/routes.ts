import { Router } from "express"
import { UserController } from "./controller/UserController"
import { TagController } from "./controller/TagController"
import { ensureAdmin } from "./middleware/ensureAdmin"
import { AuthenticateController } from "./controller/AuthenticateController"
import { ComplimentController } from "./controller/ComplimentController"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated"
import { ListReceiverComplimentsController } from "./controller/ListReceiverComplimentsController"
import { ListSenderComplimentsController } from "./controller/ListSenderComplimentsController copy"
import { ListTagsController } from "./controller/ListTagsController"
import { ListUserController } from "./controller/ListUserController"

const router = Router()

const authenticateController = new AuthenticateController()
const userController = new UserController()
const tagController = new TagController()
const complimentController = new ComplimentController()
const listReceiverComplimentController = new ListReceiverComplimentsController()
const listSenderComplimentController = new ListSenderComplimentsController()
const listTagsController = new ListTagsController()
const listUserController = new ListUserController()

router.post("/authUser", authenticateController.authenticate)
router.post("/createUser", userController.createUser)
router.post("/createTag", ensureAuthenticated, ensureAdmin, tagController.createTag)
router.post("/createCompliment", ensureAuthenticated, complimentController.createCompliment)

router.get("/listReceiverCompliments", ensureAuthenticated, listReceiverComplimentController.listReceiverCompliments)
router.get("/listSenderCompliments", ensureAuthenticated, listSenderComplimentController.listSenderCompliments)
router.get("/listTags", ensureAuthenticated, listTagsController.listTags)
router.get("/listUsers", ensureAuthenticated, listUserController.listUser)


router.get("/healthCheck", (req, res) => {
    console.log("...healthCheck... running...")
    return res.send("Hello, NLW!")
}) 

export { router }
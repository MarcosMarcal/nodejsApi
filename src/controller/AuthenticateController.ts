import { AuthenticateService } from "../service/AuthenticateService"
import { Request, Response } from "express"

class AuthenticateController {
    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body

        const authenticateService = new AuthenticateService()

        const token = await authenticateService.authenticate({
            email, password
        })

        return res.json(token)
    }
}

export { AuthenticateController }
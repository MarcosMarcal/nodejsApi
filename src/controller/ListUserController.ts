import { Request, Response } from "express";
import { ListUserService } from "../service/ListUserService";


class ListUserController {
    async listUser(req: Request, res: Response) {
        const listUserService = new ListUserService()

        const users = await listUserService.listUsers()
        
        return res.json(users)
    }
}

export { ListUserController }
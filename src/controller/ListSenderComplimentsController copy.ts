import { Request, Response } from "express";
import { ListSenderComplimentService } from "../service/ListSenderComplimentService";


class ListSenderComplimentsController {
    async listSenderCompliments(req: Request, res: Response) {
        const { user_id } = req

        const listSenderComplimentService = new ListSenderComplimentService()

        const compliments = await listSenderComplimentService.listSenderCompliments(user_id)

        return res.json(compliments)
    }
}

export { ListSenderComplimentsController }
import { Request, Response } from "express";
import { ListReceiverComplimentService } from "../service/ListReceiverComplimentService";


class ListReceiverComplimentsController {
    async listReceiverCompliments(req: Request, res: Response) {
        const { user_id } = req

        const listReceiverComplimentService = new ListReceiverComplimentService()

        const compliments = await listReceiverComplimentService.listReceiverCompliments(user_id)

        return res.json(compliments)
    }
}

export { ListReceiverComplimentsController }
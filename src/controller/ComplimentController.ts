import { Request, Response } from "express";
import { ComplimentService } from "../service/ComplimentService";

class ComplimentController {

    async createCompliment(req: Request, res: Response) {
        const { tag_id, user_receiver, message } = req.body
        const { user_id } = req

        const complimentService = new ComplimentService()

        const compliment =  await complimentService.createCompliment({
            tag_id, user_sender: user_id, user_receiver, message
        })

        return res.json(compliment)
    }
}

export { ComplimentController }
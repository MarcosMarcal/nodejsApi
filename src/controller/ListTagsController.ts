import { Request, Response } from "express";
import { ListTagsService } from "../service/ListTagsService";


class ListTagsController {
    async listTags(req: Request, res: Response) {
        const listTagsService = new ListTagsService()
        
        const tags = await listTagsService.listTags()

        return res.json(tags)
    }
}

export { ListTagsController }
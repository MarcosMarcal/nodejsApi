import { Request, Response } from "express"
import { TagService } from "../service/TagService"

class TagController {

    async createTag(req: Request, res: Response) {
        const { name } = req.body

        const tagService = new TagService()

        const tag = await tagService.createTag(name)

        return res.json(tag)

    }

}

export { TagController }
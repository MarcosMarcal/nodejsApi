import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repository/TagRepository";


class ListTagsService {
    async listTags() {
        const tagRepository = getCustomRepository(TagRepository)

        const tags = await tagRepository.find()
        
        return classToPlain(tags)
    }
}

export { ListTagsService }
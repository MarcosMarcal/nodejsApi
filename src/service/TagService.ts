import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repository/TagRepository"

class TagService {

    async createTag(name: string) {
        const tagRepository = getCustomRepository(TagRepository) 

        if(!name) {
            throw new Error("Incorrect name!")
        }

        const tagAlreadyExists = await tagRepository.findOne({
            name
        })

        if(tagAlreadyExists) {
            throw new Error("Tag already exists!")
        }

        const tag = tagRepository.create({
            name,
        })

        await tagRepository.save(tag)

        return tag
    }
}

export { TagService }
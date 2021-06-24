import { EntityRepository, Repository } from "typeorm"
import { Tags } from "../model/Tags"

@EntityRepository(Tags)
class TagRepository extends Repository<Tags> {}

export { TagRepository }
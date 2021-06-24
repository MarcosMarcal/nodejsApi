import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../model/Compliment";

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment>{}

export { ComplimentRepository }
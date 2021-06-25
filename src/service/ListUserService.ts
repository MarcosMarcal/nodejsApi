import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repository/UserRepository"


class ListUserService {
    async listUsers() {
        const userRepository = getCustomRepository(UserRepository)

        const users = await userRepository.find()
        
        return classToPlain(users)

    }
}

export { ListUserService }
import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repository/ComplimentRepository"
import { UserRepository } from "../repository/UserRepository"

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class ComplimentService {

    async createCompliment({ tag_id, user_sender, user_receiver, message } : IComplimentRequest) {
        const complimentRepository = getCustomRepository(ComplimentRepository)
        const userRepository = getCustomRepository(UserRepository)

        if(user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver")
        }

        const userReceiverExists = await userRepository.findOne(user_receiver)

        if(!userReceiverExists) {
            throw new Error("User Receiver does not exists!")
        }

        const compliment = complimentRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentRepository.save(compliment)

        return compliment
    }
}

export { ComplimentService }
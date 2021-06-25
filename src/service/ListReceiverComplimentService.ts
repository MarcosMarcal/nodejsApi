import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repository/ComplimentRepository";



class ListReceiverComplimentService {
    async listReceiverCompliments(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentRepository)

        // const compliments = await
        return complimentsRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })
        // return compliments
    }
}

export { ListReceiverComplimentService }
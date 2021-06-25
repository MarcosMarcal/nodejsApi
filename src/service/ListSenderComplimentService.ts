import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repository/ComplimentRepository";



class ListSenderComplimentService {
    async listSenderCompliments(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentRepository)

        // const compliments = await
        return complimentsRepository.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })
        // return compliments
    }
}

export { ListSenderComplimentService }
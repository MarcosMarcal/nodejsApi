import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repository/UserRepository"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateService {
    async authenticate({email, password}: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UserRepository)

        const user = await userRepository.findOne({
            email
        })

        if(!user) {
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        // const token = 
        return sign({
            email: user.email
        },"chaveSecretaNaVariavelDeAmbiente", {
            subject: user.id,
            expiresIn: "4h"
        })

        // return token
    }
}

export { AuthenticateService }
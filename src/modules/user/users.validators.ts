import { PrismaService } from "@/provider/prisma/prisma.service";
import { User } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserValidator{ 
    constructor(private prisma: PrismaService){}

    async isEmailExist( email: User['email']){ 
        let result = await this.prisma.user.findFirst({where: { email : email}})
        return result ? true : false
    }

    async isUserExist(user_name: User['user_name']){
        let result = await this.prisma.user.findFirst({where: { user_name: user_name}})
        return result ? true : false
    }

}
import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { I18nService } from 'nestjs-i18n';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { UserValidator } from './users.validators';
import { buildResponse } from '@/utils/customResponse';
import { ResponseAPI } from '@/types/http.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private i18n: I18nService , private prisma:PrismaService , private validator: UserValidator){}
 async create(createUserInput: CreateUserInput) {
      const isEmailExist = await this.validator.isEmailExist(createUserInput.email)
      if(isEmailExist){ 
        try {
          await this.prisma.user.create({data: createUserInput})
          return buildResponse(this.i18n,'index.user.createSuccess',HttpStatus.CREATED)
        } catch (error) {
          return buildResponse(this.i18n,'index.user.createFailed',HttpStatus.INTERNAL_SERVER_ERROR)
        }
      }
      return buildResponse(this.i18n,'index.general,failed',HttpStatus.INTERNAL_SERVER_ERROR)
  }

 async findAll() {
    try {
        const data = await this.prisma.user.findMany()
       return  buildResponse(this.i18n,'index.general.success',HttpStatus.OK,{items: data})
    } catch (error) {
        return buildResponse(this.i18n,'index.general.failed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

async findOne(id: string): Promise<ResponseAPI<User>> {
    try {
      const data = await this.prisma.user.findFirst({where: {id: id}})
      if(!data){
        return buildResponse(this.i18n,'index.user.notFound',HttpStatus.OK)
      }
    return buildResponse(this.i18n,'index.general.success',HttpStatus.OK,{items: data})
      
  } catch (error) {
      return buildResponse(this.i18n,'index.general.failed',HttpStatus.INTERNAL_SERVER_ERROR)
  }
  }

 async update(id: string, updateUserInput: UpdateUserInput) {
    try {
          await this.prisma.user.update({data: updateUserInput , where: {id: id}})
          return buildResponse(this.i18n,'index.user.updateSuccess',HttpStatus.OK)
          } catch (error) {
            return buildResponse(this.i18n,'index.user.updateFailed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

async  remove(id: string) {
    try {
        await this.prisma.user.delete({where: {id: id}})
        return buildResponse(this.i18n,'index.user.deleteSuccess',HttpStatus.OK)
    } catch (error) {
        return buildResponse(this.i18n,'index.user.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findUniqueUser(email: User['email']){ 
    // return null if empty
      return await this.prisma.user.findUnique({where: {email: email} , select : { 
        email : true , 
        password: true,
      }})
      

  }
}

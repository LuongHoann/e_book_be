import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class RolesService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) {}
 async create(createRoleInput: CreateRoleInput) {
try {
 await this.prisma.role.create({data: createRoleInput})
 return buildResponse(this.i18n,'index.role.createSuccess',HttpStatus.OK)
} catch (error) {
  return buildResponse(this.i18n,'index.role.createFailed',HttpStatus.INTERNAL_SERVER_ERROR)
}  }

 async findAll() {
    try {
      const data = await this.prisma.role.findMany()
      return buildResponse(this.i18n,'index.general.success',HttpStatus.OK,{items: data})
    } catch (error) {
      return buildResponse(this.i18n,'index.general.failed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

 async update(updateRoleInput: UpdateRoleInput) {
    const {id} = updateRoleInput
    try {
        await this.prisma.role.update({data: updateRoleInput , where: {id: id}})
        return buildResponse(this.i18n, 'index.role.updateSuccess',HttpStatus.OK)
    } catch (error) {
        return buildResponse(this.i18n,'index.role.updateFailed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

 async remove(id: number) {
      try {
          await this.prisma.role.delete({where: {id: id}})
          return buildResponse(this.i18n,'index.role.deleteSuccess',HttpStatus.OK)
      } catch (error) {
        return buildResponse(this.i18n,'index.role.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR)
      }
  }
}

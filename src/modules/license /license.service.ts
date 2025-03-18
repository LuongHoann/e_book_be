import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLicenseInput } from './dto/create-license.input';
import { UpdateLicenseInput } from './dto/update-license.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class LicenseService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) {}

 async create(createLicenseInput: CreateLicenseInput) {
    try {
       await this.prisma.license.create({data: createLicenseInput})
       return buildResponse(this.i18n , 'index.license.createSuccess',HttpStatus.CREATED)
    } catch (error) {
      return buildResponse(this.i18n, 'index.license.createFailed', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll() {
    try { 
      await this.prisma.license.findMany()
      return buildResponse(this.i18n, 'index.general.success' , HttpStatus.OK)
    } catch (err){ 
      return buildResponse(this.i18n,'index.general.failed', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} license`;
  // }

 async update(id: string, updateLicenseInput: UpdateLicenseInput) {
    try {
        await this.prisma.license.update({data: updateLicenseInput , where: {id : id} })
        return buildResponse(this.i18n,'index.license.updateSuccess',HttpStatus.OK )
    } catch (error) {
       return buildResponse(this.i18n, 'index.license.updateFailed', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

 async remove(id: string) {
    try {
        await this.prisma.license.delete({where: { id:id}})
        return buildResponse(this.i18n, 'index.license.deleteSuccess', HttpStatus.OK)
    } catch (error) {
        return buildResponse(this.i18n ,'index.license.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR )
    }
  }
}

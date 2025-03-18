import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLicenseTypeInput } from './dto/create-license-type.input';
import { UpdateLicenseTypeInput } from './dto/update-license-type.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class LicenseTypeService {
  constructor(private prisma: PrismaService ,private i18n:I18nService){}
 async create(createLicenseTypeInput: CreateLicenseTypeInput) {
      try {
        await this.prisma.license_type.create({data: createLicenseTypeInput})
       return buildResponse(this.i18n , 'index.licenseType.createSucess' , HttpStatus.CREATED)
      } catch (error) {
        return buildResponse(this.i18n, 'index.licenseType.createFailed',HttpStatus.INTERNAL_SERVER_ERROR)
      }
  }

 async findAll() {
  try { 
    const data =  await this.prisma.license_type.findMany()
    return buildResponse(this.i18n, 'index.general.success' , HttpStatus.OK , {items: data})
  } catch (err){ 
    return buildResponse(this.i18n,'index.general.failed', HttpStatus.INTERNAL_SERVER_ERROR)
  }
  }



 async update(id: string, updateLicenseTypeInput: UpdateLicenseTypeInput) {
    try {
        await this.prisma.license_type.update({where: {id:id}, data: updateLicenseTypeInput})
      return buildResponse(this.i18n, 'index.licenseType.updateSuccess', HttpStatus.OK)
    } catch (error) {
      return buildResponse(this.i18n, 'index.licenseType.updateFailed', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

 async remove(id: string) {
    try {
      await this.prisma.license_type.delete({where: { id:id}})
      return buildResponse(this.i18n, 'index.license.deleteSuccess', HttpStatus.OK)
  } catch (error) {
      return buildResponse(this.i18n ,'index.license.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR )
  }
  }
}

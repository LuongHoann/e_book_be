import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLicenseOwnershipInput } from './dto/create-license-ownership.input';
import { UpdateLicenseOwnershipInput } from './dto/update-license-ownership.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class LicenseOwnershipService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) {}
  async create(createLicenseOwnershipInput: CreateLicenseOwnershipInput) {
    try {
      await this.prisma.license_ownership.create({
        data: {
          expiration_date: new Date(
            createLicenseOwnershipInput.expiration_date,
          ),
          user_id: createLicenseOwnershipInput.user_id,
          license_id: createLicenseOwnershipInput.license_id,
          download_count: createLicenseOwnershipInput.download_count,
        },
      });
      return buildResponse(
        this.i18n,
        'index.licenseOwnership.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.licenseOwnership.createFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

 async update(id: number, updateLicenseOwnershipInput: UpdateLicenseOwnershipInput) {
    try {
        await this.prisma.license_ownership.update({where: {id: id} , data: updateLicenseOwnershipInput})   
       return buildResponse(this.i18n, 'index.licenseOwnership.updateSuccess', HttpStatus.OK) 
    } catch (error) {
      return buildResponse(this.i18n, 'index.licenseOwnership.updateFailed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

 async remove(id: number) {
    try {
      await this.prisma.license_ownership.delete({where: {id : id}})
      return buildResponse(this.i18n, 'index.licenseOwnership.deleteSuccess',HttpStatus.OK)
    } catch (error) {
      return buildResponse(this.i18n,'index.licenseOwnership.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}

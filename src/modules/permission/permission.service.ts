import { permission } from './../../common/@generated/permission/permission.model';
import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateMultiplePermissionInput } from './dto/create-multiple-permission.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class PermissionService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) { }

  async create(createMultiplePermissionInput: CreateMultiplePermissionInput) {
    const role_id = createMultiplePermissionInput.role_id;

    try {
      const results = await Promise.allSettled(
        createMultiplePermissionInput.urls.map(async (url) => {
          return this.prisma.permission.create({
            data: { url: url, role_id: role_id },
          });
        }),
      );
      const failedItems: { item: string }[] = [];
      // filter result
      results.forEach((result, index) => {
        if (result.status == 'rejected') {
          failedItems.push({ item: createMultiplePermissionInput.urls[index] });
        }
      });

      if (failedItems.length > 0) {
        return buildResponse(
          this.i18n,
          'index.permission.createFailed',
          HttpStatus.MULTI_STATUS,
          undefined,
          failedItems,
        );
      }

      return buildResponse(
        this.i18n,
        'index.permission.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.bookCategory.createFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async replace(createMultiplePermissionInput: CreateMultiplePermissionInput) {
    const { role_id } = createMultiplePermissionInput;

    try {
      await this.prisma.permission.deleteMany({ where: { role_id: role_id } });
      return await this.create(createMultiplePermissionInput);
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.permission.createFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAreaInput } from './dto/create-area.input';
import { UpdateAreaInput } from './dto/update-area.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { Area } from './entities/area.entity';
import { ResponseAPI } from '@/types/http.entity';
import { I18nService } from 'nestjs-i18n';
import { AreaValidators } from './area.validators';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class AreaService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
    private validator: AreaValidators,
  ) {}

  async create(createAreaInput: CreateAreaInput): Promise<ResponseAPI<Area>> {
    try {
      const isAreaExist = await this.validator.isAreaExist(
        createAreaInput.area_name,
      );
      if (!isAreaExist) {
        return buildResponse(
          this.i18n,
          'index.area.alreadyExists',
          HttpStatus.CONFLICT,
        );
      }
      await this.prisma.area.create({ data: createAreaInput });
      return buildResponse(
        this.i18n,
        'index.area.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (err) {
      return buildResponse(
        this.i18n,
        'index.area.createFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<ResponseAPI<Area>> {
    const data = await this.prisma.area.findMany();
    const isEmpty = data.length === 0;
    const statusCode = isEmpty ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    const messageCode = isEmpty
      ? 'index.general.notFound'
      : 'index.general.success';

    if (isEmpty) {
      return buildResponse(this.i18n, messageCode, statusCode);
    }
    return buildResponse(this.i18n, messageCode, statusCode, {items:data});
  }

  async update(
    areaName: string,
    updateAreaInput: UpdateAreaInput,
  ): Promise<ResponseAPI<Area>> {
    const isAreaExist = await this.validator.isAreaExist(areaName);
    if (!isAreaExist) {
      return buildResponse(
        this.i18n,
        'index.area.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.area.update({
        data: updateAreaInput,
        where: { area_name: areaName },
      });
      return buildResponse(
        this.i18n,
        'index.area.updateSuccess',
        HttpStatus.OK,
      ); // OK thay vì CREATED
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.area.updateFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(areaName: string): Promise<ResponseAPI<Area>> {
    const isAreaExist = await this.validator.isAreaExist(areaName);

    if (!isAreaExist) {
      return buildResponse(
        this.i18n,
        'index.area.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.area.delete({ where: { area_name: areaName } });
      return buildResponse(this.i18n, 'index.area.deleteSuccess', 0);
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.area.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

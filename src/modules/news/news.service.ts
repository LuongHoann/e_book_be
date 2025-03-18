import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateNewsInput } from './dto/create-news.input';
import { UpdateNewsInput } from './dto/update-news.input';
import { I18nService } from 'nestjs-i18n';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class NewsService {
  constructor(
    private i18n: I18nService,
    private prisma: PrismaService,
  ) {}

  async create(createNewsInput: CreateNewsInput) {
    try {
      await this.prisma.news.create({ data: createNewsInput });
      return buildResponse(
        this.i18n,
        'index.news.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.news.createFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const data = await this.prisma.news.findMany();
      return buildResponse(
        this.i18n,
        'index.general.success',
        HttpStatus.OK,
        {items:data},
      );
    } catch (err) {
      return buildResponse(
        this.i18n,
        'index.general.failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.prisma.news.findMany({ where: { id: id } });
      return buildResponse(
        this.i18n,
        'index.general.success',
        HttpStatus.OK,
        {items:data},
      );
    } catch (err) {
      return buildResponse(
        this.i18n,
        'index.general.failed',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: number, updateNewsInput: UpdateNewsInput) {
    try {
      await this.prisma.news.update({
        where: { id: id },
        data: updateNewsInput,
      });
      return buildResponse(
        this.i18n,
        'index.news.updateSuccess',
        HttpStatus.OK,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.news.updateFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.news.delete({ where: { id: id } });
      return buildResponse(
        this.i18n,
        'index.license.deleteSuccess',
        HttpStatus.OK,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.license.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

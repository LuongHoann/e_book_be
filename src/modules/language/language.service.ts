import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageInput } from './dto/create-language.input';
import { UpdateLanguageInput } from './dto/update-language.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';
import { LanguageValidators } from './language.validators';

@Injectable()
export class LanguageService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
    private validator: LanguageValidators
  ) {}
 async create(createLanguageInput: CreateLanguageInput) {
    await this.prisma.language.create({ data: createLanguageInput });
    return buildResponse(
      this.i18n,
      'index.language.addSuccess',
      HttpStatus.CREATED,
    );
  } catch (err) {
    return buildResponse(
      this.i18n,
      'index.language.addFailed',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

 async findAll() {
    const data = await this.prisma.language.findMany();
    const isEmpty = data.length === 0;
    const statusCode = isEmpty ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    const messageCode = isEmpty
      ? 'index.general.notFound'
      : 'index.general.success';

    if (isEmpty) {
      return buildResponse(this.i18n, messageCode, statusCode);
    }
    return buildResponse(this.i18n, messageCode, statusCode, {items: data});
  }

 async update(id: number, updateLanguageInput: UpdateLanguageInput) {
    const isLangauageExist = await this.validator.isLanguageExist(id)
    if(!isLangauageExist){
      return buildResponse(
        this.i18n,
        'index.language.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.language.update({
        data:updateLanguageInput,
        where: {id : id}
      })
      return buildResponse(this.i18n ,'index.language.updateSuccess',HttpStatus.OK )
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.language.updateFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    const isLangauageExist = await this.validator.isLanguageExist(id);
    if (!isLangauageExist) {
      return buildResponse(
        this.i18n,
        'index.language.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.language.delete({ where: {id: id } });
      return buildResponse(this.i18n, 'index.discount_code.deleteSuccess', HttpStatus.OK);
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.language.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

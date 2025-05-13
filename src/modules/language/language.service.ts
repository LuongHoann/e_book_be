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
    const rawData = await this.prisma.language.findMany({
      select: {
        id: true,
        name: true,
        code: true,
        native_name: true,
        _count: { 
          select: { language_book: true },
        }
      }
    });

    const data = rawData.map((item) => {
      const { _count, ...rest } = item;
        return { 
          ...rest,
          quantity:_count.language_book,
        }      
    })
    const isEmpty = rawData.length === 0;
    const statusCode = isEmpty ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    const messageCode = isEmpty
      ? 'index.general.notFound'
      : 'index.general.success';

    if (isEmpty) {
      return buildResponse(this.i18n, messageCode, statusCode);
    }
    return buildResponse(this.i18n, messageCode, statusCode, {items: data});
  }

 async update( updateLanguageInput: UpdateLanguageInput) {
    const {id , ...data} = updateLanguageInput;
    const isLangauageExist = await this.validator.isLanguageExist(id);
    if(!isLangauageExist){
      return buildResponse(
        this.i18n,
        'index.language.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.language.update({
        data:data,
        where: {id : parseInt(id)}
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

  async remove(id: string) {
    const isLangauageExist = await this.validator.isLanguageExist(id);
    if (!isLangauageExist) {
      return buildResponse(
        this.i18n,
        'index.language.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.language.delete({ where: {id: parseInt(id) } });
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

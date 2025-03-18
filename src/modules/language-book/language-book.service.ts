import { DeleteLanguageBookInput } from './dto/delete-language-book.input';
import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageBookInput } from './dto/create-language-book.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';
import { LanguageBookValidators } from './language-book.validators';
import { category } from '@/common/@generated/category/category.model';

@Injectable()
export class LanguageBookService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
    private validator: LanguageBookValidators,
  ) {}
  async create(createLanguageBookInput: CreateLanguageBookInput) {
    try {
      await this.prisma.language_book.create({ data: createLanguageBookInput });

      // const result = Promise.allSettled(
      //   createLanguageBookInput.map(async( categoryBook)=> { 
      //      return this.prisma.language_book.crea
      //   })
      // )
      return buildResponse(
        this.i18n,
        'index.languageBook.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (err) {
      return buildResponse(
        this.i18n,
        'index.languageBook.createFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(deleteLanguageBookInput: DeleteLanguageBookInput) {
    const isLanguageBookExist = await this.validator.isLanguageBookExist(
      deleteLanguageBookInput.book_id,
      deleteLanguageBookInput.language_id,
    );
    if (!isLanguageBookExist) {
      return buildResponse(
        this.i18n,
        'index.languageBook.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.language_book.delete({
        where: {
          language_id_book_id: {
            language_id: deleteLanguageBookInput.language_id,
            book_id: deleteLanguageBookInput.book_id,
          },
        },
      });
      return buildResponse(
        this.i18n,
        'index.discount_code.deleteSuccess',
        HttpStatus.OK,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.discountCode.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

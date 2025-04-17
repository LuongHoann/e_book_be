import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { Book } from '@/modules/book/entities/book.entity';
import { ResponseAPI } from '@/types/http.entity';
import { I18nService } from 'nestjs-i18n';
import { BookValidators } from './book.validators'; // Import validators
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class BookService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
    private validator: BookValidators,
  ) {}

  async create(input: CreateBookInput): Promise<ResponseAPI<Book>> {
    try {
      const isIsbnExist = await this.validator.isISBNExist(
        input.isbn,
      );
      if (isIsbnExist) {
        return  buildResponse(this.i18n, 'index.book.isbnExists', HttpStatus.CONFLICT)
      }
      await this.prisma.book.create({
        data:{ 
          book_title:input.book_title,
          published_at: input.published_at,
          author: input.author,
          isbn: input.isbn,
          page_number: input.page_number,
          views: input.views,
          banner_key: input.banner_key,
          book_key: input.book_key,
          description: input.description,
          status: input.status,
          //  create data for relation of book and discount table 
          book_discount: { 
              createMany: {
               data: input.discount_code.map(id => ({discount_id: id}))
              } 
          },
          //  create data for relation of book and category table 
          category_book: { 
              createMany: { 
                data: input.categories.map(id =>({category_id: id}))
              }
          },
          // 
          language_book: { 
            createMany: { 
              data:input.languages.map((id)=> ({language_id: id}))
            }
          },
        }
      });
      return buildResponse(
        this.i18n,
        'index.book.createSuccess',
        HttpStatus.OK,
      );
    } catch (err) {
      return  buildResponse(this.i18n, 'index.book.createFailed', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll(): Promise<ResponseAPI<Book>> {
    const data = await this.prisma.book.findMany();
    const isEmpty = data.length === 0;
    const statusCode = isEmpty ? -1 : 0;
    const messageCode = isEmpty
      ? 'index.general.notFound'
      : 'index.general.success';

    if (isEmpty) {
     return buildResponse(this.i18n, messageCode , statusCode)
    }

    return buildResponse(this.i18n, messageCode, statusCode, {items: data});
  }

  async findOne(id: string): Promise<ResponseAPI<Book>> {
    try {
      const data = await this.validator.isBookExist(id);
      if (!data) {
         return  buildResponse(this.i18n, 'index.book.notFound',HttpStatus.NOT_FOUND)
        }
      return buildResponse(this.i18n, 'index.general.success', HttpStatus.OK, {items: data});
    } catch (err) {
       return buildResponse(this.i18n, 'index.general.failed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async update(
    id: string,
    updateBookInput: UpdateBookInput,
  ): Promise<ResponseAPI<Book>> {
    const isBookExist = this.validator.isBookExist(id);

    let isISBNExist;
    if (updateBookInput.isbn) {
      isISBNExist = this.validator.isISBNExist(updateBookInput.isbn);
    }
    try {
      if (!isBookExist) {
         return buildResponse(this.i18n, 'index.book.notFound', HttpStatus.NOT_FOUND)
      }

      if (isISBNExist) {
        return  buildResponse(this.i18n, 'index.book.isbnExists', HttpStatus.CONFLICT)        
      }
      await this.prisma.book.update({
        where: { id },
        data: updateBookInput,
      });
      return buildResponse(
        this.i18n,
        'index.book.updateSuccess',
        HttpStatus.OK,
      );
    } catch (error) {
      return  buildResponse(this.i18n, 'index.book.updateFailed',  HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async remove(id: string): Promise<ResponseAPI<Book>> {
    const isBookExist = await this.validator.isBookExist(id);
    if (!isBookExist) {
      return  buildResponse(this.i18n, 'index.book.deleteFailed',HttpStatus.NOT_FOUND)
    }
    try {
      await this.prisma.book.delete({ where: { id } });
      return buildResponse(this.i18n, 'index.book.deleteSuccess', HttpStatus.OK);
    } catch (error) {
      return buildResponse(this.i18n, 'index.book.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}

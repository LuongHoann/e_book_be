import {  HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { Book } from '@/modules/book/entities/book.entity';
import { ResponseAPI } from '@/types/http.entity';
import { I18nService } from 'nestjs-i18n';
import { BookValidators } from './book.validators'; // Import validators
import { buildResponse } from '@/utils/customResponse';
import { DmsService } from '@/aws s3/dms/dms.service';


@Injectable()
export class BookService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
    private validator: BookValidators,
    private aws3Service: DmsService
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
               data: input.discount_code.map(id => ({discount_id: Number(id)}))
              } 
          },
          //  create data for relation of book and category table 
          category_book: { 
              createMany: { 
                data: input.categories.map(id =>({category_id: Number(id)}))
              }
          },
          // 
          language_book: { 
            createMany: { 
              data:input.languages.map((id)=> ({language_id: Number(id)}))
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
      console.log(err);
      return  buildResponse(this.i18n, 'index.book.createFailed', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll(status): Promise<ResponseAPI<any>> {
    const rawData = await this.prisma.book.findMany({
      select: {
        id: true,
        book_title: true,
        author: true,
        status: true,
        views: true,
        banner_key: true,
        book_key:true,
        language_book: {
          select: {
            language: {
              select: {
                id:true,
                name: true,
              },
            },
          },
        },
        category_book: {
          select: {
            category: {
              select: {
                id:true,
                name: true,
              },
            },
          },  
        },
        book_discount: { 
          select: { 
            discount_code: {
              select: {
                id: true,
              }
            }
          }
        }
      },
      where: { status }
    });
    const isEmpty = rawData.length === 0;
    const statusCode = isEmpty ? -1 : 0;
    const messageCode = isEmpty
      ? 'index.general.notFound'
      : 'index.general.success';    
      const data = rawData.map((item) => {
        return {
          id: item.id,
          book_title: item.book_title,
          author: item.author,
          status: item.status,
          views: item.views,
          // get data form aws
          cover_image: this.aws3Service.getCloudFrontUrl(item.banner_key as string),
          book_key: item.book_key,
          languages: item.language_book.map((item) => {
            return {
              id: item.language.id,
              name: item.language.name
            }
          }),
          categories: item.category_book.map((item) => {
            return {
              id: item.category.id,
              name: item.category.name
            }
          }),  
        };
      });

    if (isEmpty) {
     return buildResponse(this.i18n, messageCode , statusCode)
    }

    return buildResponse(this.i18n, messageCode, statusCode, {items: data});
  }

  async findOne(id: string): Promise<ResponseAPI<any>> {
    try {
      const rawData = await this.prisma.book.findUnique({
        select: {
          id: true,
          book_title: true,
          author: true,
          status: true,
          views: true,
          banner_key: true,
          book_key:true,
          isbn: true,
          page_number: true,
          description: true,
          published_at: true,
          language_book: {
            select: {
              language: {
                select: {
                  id:true,
                  name: true,
                },
              },
            },
          },
          category_book: {
            select: {
              category: {
                select: {
                  id:true,
                  name: true,
                },
              },
            },  
          },
          book_discount: { 
            select: { 
              discount_code: {
                select: {
                  id: true,
                }
              }
            }
          }
        },
        where: { id }
      });
      if (!rawData) {
         return  buildResponse(this.i18n, 'index.book.notFound',HttpStatus.NOT_FOUND)
        }
         const data = {
            book_title: rawData.book_title,
            author: rawData.author,
            status: rawData.status,
            views: rawData.views,
            // get data form aws
            cover_image: this.aws3Service.getCloudFrontUrl(rawData.banner_key as string),
            book_key: rawData.book_key,
            languages: rawData.language_book.map((item) => {
              return {
                id: item.language.id,
                name: item.language.name
              }
            }),
            categories: rawData.category_book.map((item) => {
              return {
                id: item.category.id,
                name: item.category.name
              }
            }),  
          };
        return buildResponse(this.i18n, 'index.general.success',HttpStatus.OK , {items: data})
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
    const bookToDelete = await this.validator.isBookExist(id);
    if (!bookToDelete) {
      return  buildResponse(this.i18n, 'index.book.deleteFailed',HttpStatus.NOT_FOUND)
    }
    try {
      // delete banner and book
      await this.aws3Service.deleteFile(bookToDelete.banner_key as string);
      await this.aws3Service.deleteFile(bookToDelete.book_key as string);
      // delete book
      await this.prisma.book.delete({ where: { id } });
      return buildResponse(this.i18n, 'index.book.deleteSuccess', HttpStatus.OK);
    } catch (error) {
      return buildResponse(this.i18n, 'index.book.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}

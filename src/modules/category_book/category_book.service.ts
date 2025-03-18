import { category } from '../../common/@generated/category/category.model';
import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryBookInput } from './dto/create-category_book.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';
import { CreateMultipleCategoryBookInput } from './dto';

@Injectable()
export class CategoryBookService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) {}
  async create(createCategoriesBookInput: CreateMultipleCategoryBookInput) {
    // await this.prisma.category_book.createMany({data: createCategoriesBookInput})
    const book_id = createCategoriesBookInput.book_id
    try {
      //execute all promise
      const results = await Promise.allSettled(
        createCategoriesBookInput.category.map(async (categoryBook) => {
          return this.prisma.category_book.create({ data: { category: categoryBook , book_id: book_id} });
        }),
      );

      const failedItems: { item: string }[] = [];
      // filter result
      results.forEach((result, index) => {
        if (result.status == 'rejected') {
          // changed
          failedItems.push({ item: createCategoriesBookInput.category[index] });
        }
      });
      if (failedItems.length > 0) {
        return buildResponse(
          this.i18n,
          'index.bookCategory.createFailed',
          HttpStatus.MULTI_STATUS,
          undefined,
          failedItems,
        );
      }

      return buildResponse(
        this.i18n,
        'index.bookCategory.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (err) {
      return buildResponse(
        this.i18n,
        'index.bookCategory.createFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

 async update(updateCategoriesBookInput: CreateMultipleCategoryBookInput) {

    const {category: categories ,book_id} = updateCategoriesBookInput;
   
  try {
      this.prisma.category_book.deleteMany({where: {book_id: book_id}})
      // remove all old categories of book
      
      const failedItems : { item: string }[] = []

      for( const category of categories ){ 
        try {
            await this.prisma.category_book.create({ data: { book_id: book_id , category: category}})
        } catch (error) {
            failedItems.push({item: category})
        }
      }

      if(failedItems.length > 0 ){ 
        return buildResponse(this.i18n , 'index.bookCategory.updateFailed' , HttpStatus.MULTI_STATUS , undefined, failedItems)
      }
      return buildResponse(this.i18n , 'index.bookCategory.updateSuccess', HttpStatus.OK)
  } catch (error) {
    return buildResponse(this.i18n , 'index.general.failed', HttpStatus.INTERNAL_SERVER_ERROR)
  }
  }



 async remove(id: number) {
    try {
      await this.prisma.discount_code.delete({ where: {id: id } });
      return buildResponse(this.i18n, 'index.bookCategory.deleteSuccess', HttpStatus.OK);
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.bookCategory.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

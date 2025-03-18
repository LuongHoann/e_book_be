import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryBookService } from './category_book.service';
import { CategoryBook } from './entities/category_book.entity';
import { CreateCategoryBookInput } from './dto/create-category_book.input';
import { ResponseAPI } from '@/types/http.entity';
import { CreateMultipleCategoryBookInput } from './dto';

@Resolver(() => CategoryBook)
export class CategoryBookResolver {
  constructor(private readonly categoryBookService: CategoryBookService) {}

  @Mutation(() => CategoryBook)
  createCategoriesBook(@Args('createCategoriesBookInput') createCategoriesBookInput: CreateMultipleCategoryBookInput) {
    return this.categoryBookService.create(createCategoriesBookInput);
  }
  @Mutation(()=> ResponseAPI<CategoryBook>)
  updateCategoriesBook(@Args('createCategoriesBookInput') createCategoriesBookInput: CreateMultipleCategoryBookInput) {
    return this.categoryBookService.update(createCategoriesBookInput);
  }
  

  @Mutation(() => CategoryBook)
  removeCategoryBook(@Args('id', { type: () => Int }) id: number) {
    return this.categoryBookService.remove(id);
  }
}

import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';

@Resolver(() => ResponseAPI<Category>)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() =>  ResponseAPI<Category>)
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() =>  ResponseAPI<Category>, { name: 'categories' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Mutation(() =>  ResponseAPI<Category>)
  removeCategory(@Args('name', { type: () => ID }) name: string) {
    return this.categoryService.remove(name);
  }
}

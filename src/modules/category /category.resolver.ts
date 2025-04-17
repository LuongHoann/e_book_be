import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => ResponseAPI<Category>)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() =>  ResponseAPI<Category>)
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() =>  ResponseAPI<Category>, { name: 'Categories' })
  async findAll() {
    return await this.categoryService.findAll();   
  }

  @Mutation (()=> ResponseAPI<Category>)
  updateCategory(@Args('updateCategoryInput') @Args('id' , { type: () => ID }) updateCategoryInput: UpdateCategoryInput , id : string) {{
    return this.categoryService.update(updateCategoryInput);
  }
}

  @Mutation(() =>  ResponseAPI<Category>)
  removeCategory(@Args('id', { type: () => ID }) id: string) {
    return this.categoryService.remove(id);
  }
}


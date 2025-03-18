import { CreateCategoryBookInput } from './create-category_book.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeleteCategoryBookInput extends CreateCategoryBookInput {}

import { CreateCategoryInput } from './create-category.input';
import { InputType} from '@nestjs/graphql';

@InputType()
export class DeleteCategoryInput extends CreateCategoryInput {}

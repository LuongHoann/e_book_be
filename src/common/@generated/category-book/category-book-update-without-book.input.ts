import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryUpdateOneRequiredWithoutCategory_bookNestedInput } from '../category/category-update-one-required-without-category-book-nested.input';

@InputType()
export class category_bookUpdateWithoutBookInput {

    @Field(() => categoryUpdateOneRequiredWithoutCategory_bookNestedInput, {nullable:true})
    category?: categoryUpdateOneRequiredWithoutCategory_bookNestedInput;
}

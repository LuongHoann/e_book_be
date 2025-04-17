import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutCategory_bookNestedInput } from '../book/book-update-one-required-without-category-book-nested.input';

@InputType()
export class category_bookUpdateWithoutCategoryInput {

    @Field(() => bookUpdateOneRequiredWithoutCategory_bookNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutCategory_bookNestedInput;
}

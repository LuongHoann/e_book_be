import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryUpdateOneRequiredWithoutCategory_book_category_book_categoryTocategoryNestedInput } from '../category/category-update-one-required-without-category-book-category-book-category-tocategory-nested.input';

@InputType()
export class category_bookUpdateWithoutBookInput {

    @Field(() => categoryUpdateOneRequiredWithoutCategory_book_category_book_categoryTocategoryNestedInput, {nullable:true})
    category_category_book_categoryTocategory?: categoryUpdateOneRequiredWithoutCategory_book_category_book_categoryTocategoryNestedInput;
}

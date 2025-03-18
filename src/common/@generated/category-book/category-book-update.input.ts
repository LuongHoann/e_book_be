import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutCategory_bookNestedInput } from '../book/book-update-one-required-without-category-book-nested.input';
import { Type } from 'class-transformer';
import { categoryUpdateOneRequiredWithoutCategory_book_category_book_categoryTocategoryNestedInput } from '../category/category-update-one-required-without-category-book-category-book-category-tocategory-nested.input';

@InputType()
export class category_bookUpdateInput {

    @Field(() => bookUpdateOneRequiredWithoutCategory_bookNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutCategory_bookNestedInput)
    book?: bookUpdateOneRequiredWithoutCategory_bookNestedInput;

    @Field(() => categoryUpdateOneRequiredWithoutCategory_book_category_book_categoryTocategoryNestedInput, {nullable:true})
    category_category_book_categoryTocategory?: categoryUpdateOneRequiredWithoutCategory_book_category_book_categoryTocategoryNestedInput;
}

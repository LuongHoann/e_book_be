import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryCreateNestedOneWithoutCategory_book_category_book_categoryTocategoryInput } from '../category/category-create-nested-one-without-category-book-category-book-category-tocategory.input';

@InputType()
export class category_bookCreateWithoutBookInput {

    @Field(() => categoryCreateNestedOneWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:false})
    category_category_book_categoryTocategory!: categoryCreateNestedOneWithoutCategory_book_category_book_categoryTocategoryInput;
}

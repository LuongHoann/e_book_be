import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutCategory_bookInput } from '../book/book-create-nested-one-without-category-book.input';
import { Type } from 'class-transformer';
import { categoryCreateNestedOneWithoutCategory_book_category_book_categoryTocategoryInput } from '../category/category-create-nested-one-without-category-book-category-book-category-tocategory.input';

@InputType()
export class category_bookCreateInput {

    @Field(() => bookCreateNestedOneWithoutCategory_bookInput, {nullable:false})
    @Type(() => bookCreateNestedOneWithoutCategory_bookInput)
    book!: bookCreateNestedOneWithoutCategory_bookInput;

    @Field(() => categoryCreateNestedOneWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:false})
    category_category_book_categoryTocategory!: categoryCreateNestedOneWithoutCategory_book_category_book_categoryTocategoryInput;
}

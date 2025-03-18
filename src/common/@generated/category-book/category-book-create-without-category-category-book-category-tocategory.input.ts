import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutCategory_bookInput } from '../book/book-create-nested-one-without-category-book.input';
import { Type } from 'class-transformer';

@InputType()
export class category_bookCreateWithoutCategory_category_book_categoryTocategoryInput {

    @Field(() => bookCreateNestedOneWithoutCategory_bookInput, {nullable:false})
    @Type(() => bookCreateNestedOneWithoutCategory_bookInput)
    book!: bookCreateNestedOneWithoutCategory_bookInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutCategory_bookInput } from '../book/book-create-nested-one-without-category-book.input';

@InputType()
export class category_bookCreateWithoutCategory_category_book_categoryTocategoryInput {

    @Field(() => bookCreateNestedOneWithoutCategory_bookInput, {nullable:false})
    book!: bookCreateNestedOneWithoutCategory_bookInput;
}

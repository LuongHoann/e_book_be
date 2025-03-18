import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { book } from '../book/book.model';
import { category } from '../category/category.model';

@ObjectType()
export class category_book {

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => book, {nullable:false})
    book?: book;

    @Field(() => category, {nullable:false})
    category_category_book_categoryTocategory?: category;
}

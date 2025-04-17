import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { book } from '../book/book.model';
import { category } from '../category/category.model';

@ObjectType()
export class category_book {

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => book, {nullable:false})
    book?: book;

    @Field(() => category, {nullable:false})
    category?: category;
}

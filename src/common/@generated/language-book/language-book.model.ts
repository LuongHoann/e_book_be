import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { book } from '../book/book.model';
import { language } from '../language/language.model';

@ObjectType()
export class language_book {

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => book, {nullable:false})
    book?: book;

    @Field(() => language, {nullable:false})
    language?: language;
}

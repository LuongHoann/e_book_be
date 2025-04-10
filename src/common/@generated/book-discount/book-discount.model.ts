import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { book } from '../book/book.model';
import { discount_code } from '../discount-code/discount-code.model';

@ObjectType()
export class book_discount {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => Int, {nullable:false})
    discount_id!: number;

    @Field(() => book, {nullable:false})
    book?: book;

    @Field(() => discount_code, {nullable:false})
    discount_code?: discount_code;
}

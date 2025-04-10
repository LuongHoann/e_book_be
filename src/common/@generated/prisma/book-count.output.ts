import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookCount {

    @Field(() => Int, {nullable:false})
    book_discount!: number;

    @Field(() => Int, {nullable:false})
    category_book!: number;

    @Field(() => Int, {nullable:false})
    comment!: number;

    @Field(() => Int, {nullable:false})
    favourite!: number;

    @Field(() => Int, {nullable:false})
    language_book!: number;

    @Field(() => Int, {nullable:false})
    license!: number;

    @Field(() => Int, {nullable:false})
    reading_history!: number;

    @Field(() => Int, {nullable:false})
    review!: number;

    @Field(() => Int, {nullable:false})
    shopping_cart!: number;

    @Field(() => Int, {nullable:false})
    transaction_history!: number;
}

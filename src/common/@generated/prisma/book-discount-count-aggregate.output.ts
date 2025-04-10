import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Book_discountCountAggregate {

    @Field(() => Int, {nullable:false})
    book_id!: number;

    @Field(() => Int, {nullable:false})
    discount_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

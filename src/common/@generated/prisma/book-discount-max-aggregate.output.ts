import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Book_discountMaxAggregate {

    @Field(() => String, {nullable:true})
    book_id?: string;

    @Field(() => Int, {nullable:true})
    discount_id?: number;
}

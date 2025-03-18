import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookSumAggregate {

    @Field(() => Int, {nullable:true})
    pushlied_at?: number;

    @Field(() => Int, {nullable:true})
    page_number?: number;

    @Field(() => Int, {nullable:true})
    discount_id?: number;

    @Field(() => Int, {nullable:true})
    views?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Book_discountSumAggregate {

    @Field(() => Int, {nullable:true})
    discount_id?: number;
}

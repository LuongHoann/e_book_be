import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Book_discountAvgAggregate {

    @Field(() => Float, {nullable:true})
    discount_id?: number;
}

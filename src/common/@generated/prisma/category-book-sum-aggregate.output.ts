import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Category_bookSumAggregate {

    @Field(() => Int, {nullable:true})
    category_id?: number;
}

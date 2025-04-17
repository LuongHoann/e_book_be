import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Category_bookAvgAggregate {

    @Field(() => Float, {nullable:true})
    category_id?: number;
}

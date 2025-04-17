import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookAvgAggregate {

    @Field(() => Float, {nullable:true})
    page_number?: number;

    @Field(() => Float, {nullable:true})
    views?: number;
}

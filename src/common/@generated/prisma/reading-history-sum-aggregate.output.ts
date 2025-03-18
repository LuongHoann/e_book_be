import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Reading_historySumAggregate {

    @Field(() => Int, {nullable:true})
    page?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Language_bookSumAggregate {

    @Field(() => Int, {nullable:true})
    language_id?: number;
}

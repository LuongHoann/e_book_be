import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Language_bookCountAggregate {

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => Int, {nullable:false})
    book_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

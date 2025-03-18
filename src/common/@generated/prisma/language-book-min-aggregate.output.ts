import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Language_bookMinAggregate {

    @Field(() => Int, {nullable:true})
    language_id?: number;

    @Field(() => String, {nullable:true})
    book_id?: string;
}

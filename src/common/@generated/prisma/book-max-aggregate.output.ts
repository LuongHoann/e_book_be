import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    book_title?: string;

    @Field(() => Int, {nullable:true})
    pushlied_at?: number;

    @Field(() => String, {nullable:true})
    author?: string;

    @Field(() => String, {nullable:true})
    isbn?: string;

    @Field(() => Int, {nullable:true})
    page_number?: number;

    @Field(() => Int, {nullable:true})
    discount_id?: number;

    @Field(() => Int, {nullable:true})
    views?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}

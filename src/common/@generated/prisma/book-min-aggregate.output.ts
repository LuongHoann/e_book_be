import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    book_title?: string;

    @Field(() => String, {nullable:true})
    author?: string;

    @Field(() => String, {nullable:true})
    isbn?: string;

    @Field(() => Int, {nullable:true})
    page_number?: number;

    @Field(() => Int, {nullable:true})
    views?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:true})
    banner_key?: string;

    @Field(() => String, {nullable:true})
    book_key?: string;

    @Field(() => Date, {nullable:true})
    published_at?: Date | string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    status?: string;
}

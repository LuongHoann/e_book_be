import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    book_title!: number;

    @Field(() => Int, {nullable:false})
    author!: number;

    @Field(() => Int, {nullable:false})
    isbn!: number;

    @Field(() => Int, {nullable:false})
    page_number!: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    banner_key!: number;

    @Field(() => Int, {nullable:false})
    book_key!: number;

    @Field(() => Int, {nullable:false})
    published_at!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

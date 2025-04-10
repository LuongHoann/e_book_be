import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookCountAggregate } from './book-count-aggregate.output';
import { BookAvgAggregate } from './book-avg-aggregate.output';
import { BookSumAggregate } from './book-sum-aggregate.output';
import { BookMinAggregate } from './book-min-aggregate.output';
import { BookMaxAggregate } from './book-max-aggregate.output';

@ObjectType()
export class BookGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    book_title!: string;

    @Field(() => String, {nullable:false})
    author!: string;

    @Field(() => String, {nullable:false})
    isbn!: string;

    @Field(() => Int, {nullable:false})
    page_number!: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:true})
    banner_key?: string;

    @Field(() => String, {nullable:false})
    book_key!: string;

    @Field(() => Int, {nullable:false})
    published_at!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => BookCountAggregate, {nullable:true})
    _count?: BookCountAggregate;

    @Field(() => BookAvgAggregate, {nullable:true})
    _avg?: BookAvgAggregate;

    @Field(() => BookSumAggregate, {nullable:true})
    _sum?: BookSumAggregate;

    @Field(() => BookMinAggregate, {nullable:true})
    _min?: BookMinAggregate;

    @Field(() => BookMaxAggregate, {nullable:true})
    _max?: BookMaxAggregate;
}

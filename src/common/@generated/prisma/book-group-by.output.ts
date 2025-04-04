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

    @Field(() => Int, {nullable:false})
    pushlied_at!: number;

    @Field(() => String, {nullable:false})
    author!: string;

    @Field(() => String, {nullable:false})
    isbn!: string;

    @Field(() => Int, {nullable:false})
    page_number!: number;

    @Field(() => Int, {nullable:true})
    discount_id?: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:false})
    book_content_url!: string;

    @Field(() => String, {nullable:true})
    book_banner_url?: string;

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

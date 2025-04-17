import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Category_bookCountAggregate } from './category-book-count-aggregate.output';
import { Category_bookAvgAggregate } from './category-book-avg-aggregate.output';
import { Category_bookSumAggregate } from './category-book-sum-aggregate.output';
import { Category_bookMinAggregate } from './category-book-min-aggregate.output';
import { Category_bookMaxAggregate } from './category-book-max-aggregate.output';

@ObjectType()
export class Category_bookGroupBy {

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => Category_bookCountAggregate, {nullable:true})
    _count?: Category_bookCountAggregate;

    @Field(() => Category_bookAvgAggregate, {nullable:true})
    _avg?: Category_bookAvgAggregate;

    @Field(() => Category_bookSumAggregate, {nullable:true})
    _sum?: Category_bookSumAggregate;

    @Field(() => Category_bookMinAggregate, {nullable:true})
    _min?: Category_bookMinAggregate;

    @Field(() => Category_bookMaxAggregate, {nullable:true})
    _max?: Category_bookMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NewsCountAggregate } from './news-count-aggregate.output';
import { NewsAvgAggregate } from './news-avg-aggregate.output';
import { NewsSumAggregate } from './news-sum-aggregate.output';
import { NewsMinAggregate } from './news-min-aggregate.output';
import { NewsMaxAggregate } from './news-max-aggregate.output';

@ObjectType()
export class NewsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    publish_date?: Date | string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => NewsCountAggregate, {nullable:true})
    _count?: NewsCountAggregate;

    @Field(() => NewsAvgAggregate, {nullable:true})
    _avg?: NewsAvgAggregate;

    @Field(() => NewsSumAggregate, {nullable:true})
    _sum?: NewsSumAggregate;

    @Field(() => NewsMinAggregate, {nullable:true})
    _min?: NewsMinAggregate;

    @Field(() => NewsMaxAggregate, {nullable:true})
    _max?: NewsMaxAggregate;
}

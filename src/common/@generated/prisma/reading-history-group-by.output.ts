import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Reading_historyCountAggregate } from './reading-history-count-aggregate.output';
import { Reading_historyAvgAggregate } from './reading-history-avg-aggregate.output';
import { Reading_historySumAggregate } from './reading-history-sum-aggregate.output';
import { Reading_historyMinAggregate } from './reading-history-min-aggregate.output';
import { Reading_historyMaxAggregate } from './reading-history-max-aggregate.output';

@ObjectType()
export class Reading_historyGroupBy {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => Int, {nullable:true})
    page?: number;

    @Field(() => Date, {nullable:true})
    update_at?: Date | string;

    @Field(() => Reading_historyCountAggregate, {nullable:true})
    _count?: Reading_historyCountAggregate;

    @Field(() => Reading_historyAvgAggregate, {nullable:true})
    _avg?: Reading_historyAvgAggregate;

    @Field(() => Reading_historySumAggregate, {nullable:true})
    _sum?: Reading_historySumAggregate;

    @Field(() => Reading_historyMinAggregate, {nullable:true})
    _min?: Reading_historyMinAggregate;

    @Field(() => Reading_historyMaxAggregate, {nullable:true})
    _max?: Reading_historyMaxAggregate;
}

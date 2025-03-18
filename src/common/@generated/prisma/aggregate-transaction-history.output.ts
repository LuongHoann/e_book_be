import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Transaction_historyCountAggregate } from './transaction-history-count-aggregate.output';
import { Transaction_historyMinAggregate } from './transaction-history-min-aggregate.output';
import { Transaction_historyMaxAggregate } from './transaction-history-max-aggregate.output';

@ObjectType()
export class AggregateTransaction_history {

    @Field(() => Transaction_historyCountAggregate, {nullable:true})
    _count?: Transaction_historyCountAggregate;

    @Field(() => Transaction_historyMinAggregate, {nullable:true})
    _min?: Transaction_historyMinAggregate;

    @Field(() => Transaction_historyMaxAggregate, {nullable:true})
    _max?: Transaction_historyMaxAggregate;
}

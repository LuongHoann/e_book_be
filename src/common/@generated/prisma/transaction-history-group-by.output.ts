import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Transaction_historyCountAggregate } from './transaction-history-count-aggregate.output';
import { Transaction_historyMinAggregate } from './transaction-history-min-aggregate.output';
import { Transaction_historyMaxAggregate } from './transaction-history-max-aggregate.output';

@ObjectType()
export class Transaction_historyGroupBy {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:true})
    payment_date?: Date | string;

    @Field(() => Transaction_historyCountAggregate, {nullable:true})
    _count?: Transaction_historyCountAggregate;

    @Field(() => Transaction_historyMinAggregate, {nullable:true})
    _min?: Transaction_historyMinAggregate;

    @Field(() => Transaction_historyMaxAggregate, {nullable:true})
    _max?: Transaction_historyMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transaction_historyWhereInput } from '../transaction-history/transaction-history-where.input';
import { Type } from 'class-transformer';
import { transaction_historyOrderByWithAggregationInput } from '../transaction-history/transaction-history-order-by-with-aggregation.input';
import { Transaction_historyScalarFieldEnum } from './transaction-history-scalar-field.enum';
import { transaction_historyScalarWhereWithAggregatesInput } from '../transaction-history/transaction-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBytransactionHistoryArgs {

    @Field(() => transaction_historyWhereInput, {nullable:true})
    @Type(() => transaction_historyWhereInput)
    where?: transaction_historyWhereInput;

    @Field(() => [transaction_historyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<transaction_historyOrderByWithAggregationInput>;

    @Field(() => [Transaction_historyScalarFieldEnum], {nullable:false})
    by!: Array<`${Transaction_historyScalarFieldEnum}`>;

    @Field(() => transaction_historyScalarWhereWithAggregatesInput, {nullable:true})
    having?: transaction_historyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

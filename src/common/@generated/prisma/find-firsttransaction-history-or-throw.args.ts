import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transaction_historyWhereInput } from '../transaction-history/transaction-history-where.input';
import { Type } from 'class-transformer';
import { transaction_historyOrderByWithRelationInput } from '../transaction-history/transaction-history-order-by-with-relation.input';
import { transaction_historyWhereUniqueInput } from '../transaction-history/transaction-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Transaction_historyScalarFieldEnum } from './transaction-history-scalar-field.enum';

@ArgsType()
export class FindFirsttransactionHistoryOrThrowArgs {

    @Field(() => transaction_historyWhereInput, {nullable:true})
    @Type(() => transaction_historyWhereInput)
    where?: transaction_historyWhereInput;

    @Field(() => [transaction_historyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<transaction_historyOrderByWithRelationInput>;

    @Field(() => transaction_historyWhereUniqueInput, {nullable:true})
    cursor?: transaction_historyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Transaction_historyScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Transaction_historyScalarFieldEnum}`>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transaction_historyWhereInput } from '../transaction-history/transaction-history-where.input';

@InputType()
export class Transaction_historyListRelationFilter {

    @Field(() => transaction_historyWhereInput, {nullable:true})
    every?: transaction_historyWhereInput;

    @Field(() => transaction_historyWhereInput, {nullable:true})
    some?: transaction_historyWhereInput;

    @Field(() => transaction_historyWhereInput, {nullable:true})
    none?: transaction_historyWhereInput;
}

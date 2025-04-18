import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transaction_historyUpdateInput } from '../transaction-history/transaction-history-update.input';
import { Type } from 'class-transformer';
import { transaction_historyWhereUniqueInput } from '../transaction-history/transaction-history-where-unique.input';

@ArgsType()
export class UpdateOnetransactionHistoryArgs {

    @Field(() => transaction_historyUpdateInput, {nullable:false})
    @Type(() => transaction_historyUpdateInput)
    data!: transaction_historyUpdateInput;

    @Field(() => transaction_historyWhereUniqueInput, {nullable:false})
    @Type(() => transaction_historyWhereUniqueInput)
    where!: transaction_historyWhereUniqueInput;
}

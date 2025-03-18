import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transaction_historyWhereUniqueInput } from '../transaction-history/transaction-history-where-unique.input';
import { Type } from 'class-transformer';
import { transaction_historyCreateInput } from '../transaction-history/transaction-history-create.input';
import { transaction_historyUpdateInput } from '../transaction-history/transaction-history-update.input';

@ArgsType()
export class UpsertOnetransactionHistoryArgs {

    @Field(() => transaction_historyWhereUniqueInput, {nullable:false})
    @Type(() => transaction_historyWhereUniqueInput)
    where!: transaction_historyWhereUniqueInput;

    @Field(() => transaction_historyCreateInput, {nullable:false})
    @Type(() => transaction_historyCreateInput)
    create!: transaction_historyCreateInput;

    @Field(() => transaction_historyUpdateInput, {nullable:false})
    @Type(() => transaction_historyUpdateInput)
    update!: transaction_historyUpdateInput;
}

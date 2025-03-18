import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transaction_historyWhereUniqueInput } from '../transaction-history/transaction-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquetransactionHistoryArgs {

    @Field(() => transaction_historyWhereUniqueInput, {nullable:false})
    @Type(() => transaction_historyWhereUniqueInput)
    where!: transaction_historyWhereUniqueInput;
}

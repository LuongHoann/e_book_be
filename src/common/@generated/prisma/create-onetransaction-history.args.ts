import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transaction_historyCreateInput } from '../transaction-history/transaction-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnetransactionHistoryArgs {

    @Field(() => transaction_historyCreateInput, {nullable:false})
    @Type(() => transaction_historyCreateInput)
    data!: transaction_historyCreateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transaction_historyWhereInput } from '../transaction-history/transaction-history-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManytransactionHistoryArgs {

    @Field(() => transaction_historyWhereInput, {nullable:true})
    @Type(() => transaction_historyWhereInput)
    where?: transaction_historyWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

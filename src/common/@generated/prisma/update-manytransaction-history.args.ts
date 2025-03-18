import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transaction_historyUpdateManyMutationInput } from '../transaction-history/transaction-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { transaction_historyWhereInput } from '../transaction-history/transaction-history-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManytransactionHistoryArgs {

    @Field(() => transaction_historyUpdateManyMutationInput, {nullable:false})
    @Type(() => transaction_historyUpdateManyMutationInput)
    data!: transaction_historyUpdateManyMutationInput;

    @Field(() => transaction_historyWhereInput, {nullable:true})
    @Type(() => transaction_historyWhereInput)
    where?: transaction_historyWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

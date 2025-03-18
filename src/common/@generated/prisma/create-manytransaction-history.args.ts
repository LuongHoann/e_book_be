import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transaction_historyCreateManyInput } from '../transaction-history/transaction-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManytransactionHistoryArgs {

    @Field(() => [transaction_historyCreateManyInput], {nullable:false})
    @Type(() => transaction_historyCreateManyInput)
    data!: Array<transaction_historyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

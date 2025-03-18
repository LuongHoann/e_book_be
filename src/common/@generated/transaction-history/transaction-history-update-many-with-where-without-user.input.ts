import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transaction_historyScalarWhereInput } from './transaction-history-scalar-where.input';
import { Type } from 'class-transformer';
import { transaction_historyUpdateManyMutationInput } from './transaction-history-update-many-mutation.input';

@InputType()
export class transaction_historyUpdateManyWithWhereWithoutUserInput {

    @Field(() => transaction_historyScalarWhereInput, {nullable:false})
    @Type(() => transaction_historyScalarWhereInput)
    where!: transaction_historyScalarWhereInput;

    @Field(() => transaction_historyUpdateManyMutationInput, {nullable:false})
    @Type(() => transaction_historyUpdateManyMutationInput)
    data!: transaction_historyUpdateManyMutationInput;
}

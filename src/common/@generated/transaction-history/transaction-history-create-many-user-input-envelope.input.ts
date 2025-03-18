import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transaction_historyCreateManyUserInput } from './transaction-history-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class transaction_historyCreateManyUserInputEnvelope {

    @Field(() => [transaction_historyCreateManyUserInput], {nullable:false})
    @Type(() => transaction_historyCreateManyUserInput)
    data!: Array<transaction_historyCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

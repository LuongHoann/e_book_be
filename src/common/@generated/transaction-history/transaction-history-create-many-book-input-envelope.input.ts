import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transaction_historyCreateManyBookInput } from './transaction-history-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class transaction_historyCreateManyBookInputEnvelope {

    @Field(() => [transaction_historyCreateManyBookInput], {nullable:false})
    @Type(() => transaction_historyCreateManyBookInput)
    data!: Array<transaction_historyCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

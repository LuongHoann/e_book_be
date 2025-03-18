import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { transaction_historyWhereUniqueInput } from './transaction-history-where-unique.input';
import { Type } from 'class-transformer';
import { transaction_historyUpdateWithoutBookInput } from './transaction-history-update-without-book.input';

@InputType()
export class transaction_historyUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => transaction_historyWhereUniqueInput, {nullable:false})
    @Type(() => transaction_historyWhereUniqueInput)
    where!: Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => transaction_historyUpdateWithoutBookInput, {nullable:false})
    @Type(() => transaction_historyUpdateWithoutBookInput)
    data!: transaction_historyUpdateWithoutBookInput;
}

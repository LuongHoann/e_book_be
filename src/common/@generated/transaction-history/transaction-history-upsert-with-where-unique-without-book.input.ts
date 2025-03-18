import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { transaction_historyWhereUniqueInput } from './transaction-history-where-unique.input';
import { Type } from 'class-transformer';
import { transaction_historyUpdateWithoutBookInput } from './transaction-history-update-without-book.input';
import { transaction_historyCreateWithoutBookInput } from './transaction-history-create-without-book.input';

@InputType()
export class transaction_historyUpsertWithWhereUniqueWithoutBookInput {

    @Field(() => transaction_historyWhereUniqueInput, {nullable:false})
    @Type(() => transaction_historyWhereUniqueInput)
    where!: Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => transaction_historyUpdateWithoutBookInput, {nullable:false})
    @Type(() => transaction_historyUpdateWithoutBookInput)
    update!: transaction_historyUpdateWithoutBookInput;

    @Field(() => transaction_historyCreateWithoutBookInput, {nullable:false})
    @Type(() => transaction_historyCreateWithoutBookInput)
    create!: transaction_historyCreateWithoutBookInput;
}

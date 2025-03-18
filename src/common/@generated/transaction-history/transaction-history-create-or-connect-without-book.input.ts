import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { transaction_historyWhereUniqueInput } from './transaction-history-where-unique.input';
import { Type } from 'class-transformer';
import { transaction_historyCreateWithoutBookInput } from './transaction-history-create-without-book.input';

@InputType()
export class transaction_historyCreateOrConnectWithoutBookInput {

    @Field(() => transaction_historyWhereUniqueInput, {nullable:false})
    @Type(() => transaction_historyWhereUniqueInput)
    where!: Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => transaction_historyCreateWithoutBookInput, {nullable:false})
    @Type(() => transaction_historyCreateWithoutBookInput)
    create!: transaction_historyCreateWithoutBookInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { transaction_historyWhereUniqueInput } from './transaction-history-where-unique.input';
import { Type } from 'class-transformer';
import { transaction_historyCreateWithoutUserInput } from './transaction-history-create-without-user.input';

@InputType()
export class transaction_historyCreateOrConnectWithoutUserInput {

    @Field(() => transaction_historyWhereUniqueInput, {nullable:false})
    @Type(() => transaction_historyWhereUniqueInput)
    where!: Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => transaction_historyCreateWithoutUserInput, {nullable:false})
    @Type(() => transaction_historyCreateWithoutUserInput)
    create!: transaction_historyCreateWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transaction_historyCreateWithoutBookInput } from './transaction-history-create-without-book.input';
import { Type } from 'class-transformer';
import { transaction_historyCreateOrConnectWithoutBookInput } from './transaction-history-create-or-connect-without-book.input';
import { transaction_historyCreateManyBookInputEnvelope } from './transaction-history-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { transaction_historyWhereUniqueInput } from './transaction-history-where-unique.input';

@InputType()
export class transaction_historyUncheckedCreateNestedManyWithoutBookInput {

    @Field(() => [transaction_historyCreateWithoutBookInput], {nullable:true})
    @Type(() => transaction_historyCreateWithoutBookInput)
    create?: Array<transaction_historyCreateWithoutBookInput>;

    @Field(() => [transaction_historyCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => transaction_historyCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<transaction_historyCreateOrConnectWithoutBookInput>;

    @Field(() => transaction_historyCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => transaction_historyCreateManyBookInputEnvelope)
    createMany?: transaction_historyCreateManyBookInputEnvelope;

    @Field(() => [transaction_historyWhereUniqueInput], {nullable:true})
    @Type(() => transaction_historyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>>;
}

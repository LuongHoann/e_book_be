import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transaction_historyCreateWithoutBookInput } from './transaction-history-create-without-book.input';
import { Type } from 'class-transformer';
import { transaction_historyCreateOrConnectWithoutBookInput } from './transaction-history-create-or-connect-without-book.input';
import { transaction_historyUpsertWithWhereUniqueWithoutBookInput } from './transaction-history-upsert-with-where-unique-without-book.input';
import { transaction_historyCreateManyBookInputEnvelope } from './transaction-history-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { transaction_historyWhereUniqueInput } from './transaction-history-where-unique.input';
import { transaction_historyUpdateWithWhereUniqueWithoutBookInput } from './transaction-history-update-with-where-unique-without-book.input';
import { transaction_historyUpdateManyWithWhereWithoutBookInput } from './transaction-history-update-many-with-where-without-book.input';
import { transaction_historyScalarWhereInput } from './transaction-history-scalar-where.input';

@InputType()
export class transaction_historyUpdateManyWithoutBookNestedInput {

    @Field(() => [transaction_historyCreateWithoutBookInput], {nullable:true})
    @Type(() => transaction_historyCreateWithoutBookInput)
    create?: Array<transaction_historyCreateWithoutBookInput>;

    @Field(() => [transaction_historyCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => transaction_historyCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<transaction_historyCreateOrConnectWithoutBookInput>;

    @Field(() => [transaction_historyUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => transaction_historyUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<transaction_historyUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => transaction_historyCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => transaction_historyCreateManyBookInputEnvelope)
    createMany?: transaction_historyCreateManyBookInputEnvelope;

    @Field(() => [transaction_historyWhereUniqueInput], {nullable:true})
    @Type(() => transaction_historyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [transaction_historyWhereUniqueInput], {nullable:true})
    @Type(() => transaction_historyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [transaction_historyWhereUniqueInput], {nullable:true})
    @Type(() => transaction_historyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [transaction_historyWhereUniqueInput], {nullable:true})
    @Type(() => transaction_historyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [transaction_historyUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => transaction_historyUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<transaction_historyUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [transaction_historyUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => transaction_historyUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<transaction_historyUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [transaction_historyScalarWhereInput], {nullable:true})
    @Type(() => transaction_historyScalarWhereInput)
    deleteMany?: Array<transaction_historyScalarWhereInput>;
}

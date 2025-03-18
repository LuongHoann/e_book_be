import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transaction_historyCreateWithoutUserInput } from './transaction-history-create-without-user.input';
import { Type } from 'class-transformer';
import { transaction_historyCreateOrConnectWithoutUserInput } from './transaction-history-create-or-connect-without-user.input';
import { transaction_historyUpsertWithWhereUniqueWithoutUserInput } from './transaction-history-upsert-with-where-unique-without-user.input';
import { transaction_historyCreateManyUserInputEnvelope } from './transaction-history-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { transaction_historyWhereUniqueInput } from './transaction-history-where-unique.input';
import { transaction_historyUpdateWithWhereUniqueWithoutUserInput } from './transaction-history-update-with-where-unique-without-user.input';
import { transaction_historyUpdateManyWithWhereWithoutUserInput } from './transaction-history-update-many-with-where-without-user.input';
import { transaction_historyScalarWhereInput } from './transaction-history-scalar-where.input';

@InputType()
export class transaction_historyUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [transaction_historyCreateWithoutUserInput], {nullable:true})
    @Type(() => transaction_historyCreateWithoutUserInput)
    create?: Array<transaction_historyCreateWithoutUserInput>;

    @Field(() => [transaction_historyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => transaction_historyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<transaction_historyCreateOrConnectWithoutUserInput>;

    @Field(() => [transaction_historyUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => transaction_historyUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<transaction_historyUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => transaction_historyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => transaction_historyCreateManyUserInputEnvelope)
    createMany?: transaction_historyCreateManyUserInputEnvelope;

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

    @Field(() => [transaction_historyUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => transaction_historyUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<transaction_historyUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [transaction_historyUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => transaction_historyUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<transaction_historyUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [transaction_historyScalarWhereInput], {nullable:true})
    @Type(() => transaction_historyScalarWhereInput)
    deleteMany?: Array<transaction_historyScalarWhereInput>;
}

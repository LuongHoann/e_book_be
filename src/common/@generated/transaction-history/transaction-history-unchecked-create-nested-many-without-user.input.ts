import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transaction_historyCreateWithoutUserInput } from './transaction-history-create-without-user.input';
import { Type } from 'class-transformer';
import { transaction_historyCreateOrConnectWithoutUserInput } from './transaction-history-create-or-connect-without-user.input';
import { transaction_historyCreateManyUserInputEnvelope } from './transaction-history-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { transaction_historyWhereUniqueInput } from './transaction-history-where-unique.input';

@InputType()
export class transaction_historyUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [transaction_historyCreateWithoutUserInput], {nullable:true})
    @Type(() => transaction_historyCreateWithoutUserInput)
    create?: Array<transaction_historyCreateWithoutUserInput>;

    @Field(() => [transaction_historyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => transaction_historyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<transaction_historyCreateOrConnectWithoutUserInput>;

    @Field(() => transaction_historyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => transaction_historyCreateManyUserInputEnvelope)
    createMany?: transaction_historyCreateManyUserInputEnvelope;

    @Field(() => [transaction_historyWhereUniqueInput], {nullable:true})
    @Type(() => transaction_historyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<transaction_historyWhereUniqueInput, 'user_id_book_id'>>;
}

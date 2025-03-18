import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutTransaction_historyInput } from './book-create-without-transaction-history.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutTransaction_historyInput } from './book-create-or-connect-without-transaction-history.input';
import { bookUpsertWithoutTransaction_historyInput } from './book-upsert-without-transaction-history.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { bookUpdateToOneWithWhereWithoutTransaction_historyInput } from './book-update-to-one-with-where-without-transaction-history.input';

@InputType()
export class bookUpdateOneRequiredWithoutTransaction_historyNestedInput {

    @Field(() => bookCreateWithoutTransaction_historyInput, {nullable:true})
    @Type(() => bookCreateWithoutTransaction_historyInput)
    create?: bookCreateWithoutTransaction_historyInput;

    @Field(() => bookCreateOrConnectWithoutTransaction_historyInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutTransaction_historyInput)
    connectOrCreate?: bookCreateOrConnectWithoutTransaction_historyInput;

    @Field(() => bookUpsertWithoutTransaction_historyInput, {nullable:true})
    @Type(() => bookUpsertWithoutTransaction_historyInput)
    upsert?: bookUpsertWithoutTransaction_historyInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateToOneWithWhereWithoutTransaction_historyInput, {nullable:true})
    @Type(() => bookUpdateToOneWithWhereWithoutTransaction_historyInput)
    update?: bookUpdateToOneWithWhereWithoutTransaction_historyInput;
}

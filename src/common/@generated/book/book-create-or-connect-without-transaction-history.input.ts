import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutTransaction_historyInput } from './book-create-without-transaction-history.input';

@InputType()
export class bookCreateOrConnectWithoutTransaction_historyInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutTransaction_historyInput, {nullable:false})
    @Type(() => bookCreateWithoutTransaction_historyInput)
    create!: bookCreateWithoutTransaction_historyInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutTransaction_historyInput } from './user-create-without-transaction-history.input';

@InputType()
export class userCreateOrConnectWithoutTransaction_historyInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutTransaction_historyInput, {nullable:false})
    @Type(() => userCreateWithoutTransaction_historyInput)
    create!: userCreateWithoutTransaction_historyInput;
}

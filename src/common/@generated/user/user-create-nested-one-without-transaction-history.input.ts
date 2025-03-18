import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutTransaction_historyInput } from './user-create-without-transaction-history.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutTransaction_historyInput } from './user-create-or-connect-without-transaction-history.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class userCreateNestedOneWithoutTransaction_historyInput {

    @Field(() => userCreateWithoutTransaction_historyInput, {nullable:true})
    @Type(() => userCreateWithoutTransaction_historyInput)
    create?: userCreateWithoutTransaction_historyInput;

    @Field(() => userCreateOrConnectWithoutTransaction_historyInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutTransaction_historyInput)
    connectOrCreate?: userCreateOrConnectWithoutTransaction_historyInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;
}

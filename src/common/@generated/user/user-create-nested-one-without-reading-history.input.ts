import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutReading_historyInput } from './user-create-without-reading-history.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutReading_historyInput } from './user-create-or-connect-without-reading-history.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class userCreateNestedOneWithoutReading_historyInput {

    @Field(() => userCreateWithoutReading_historyInput, {nullable:true})
    @Type(() => userCreateWithoutReading_historyInput)
    create?: userCreateWithoutReading_historyInput;

    @Field(() => userCreateOrConnectWithoutReading_historyInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutReading_historyInput)
    connectOrCreate?: userCreateOrConnectWithoutReading_historyInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;
}

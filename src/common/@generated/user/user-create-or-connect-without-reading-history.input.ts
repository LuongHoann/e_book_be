import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutReading_historyInput } from './user-create-without-reading-history.input';

@InputType()
export class userCreateOrConnectWithoutReading_historyInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutReading_historyInput, {nullable:false})
    @Type(() => userCreateWithoutReading_historyInput)
    create!: userCreateWithoutReading_historyInput;
}

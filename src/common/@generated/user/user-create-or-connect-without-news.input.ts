import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutNewsInput } from './user-create-without-news.input';

@InputType()
export class userCreateOrConnectWithoutNewsInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutNewsInput, {nullable:false})
    @Type(() => userCreateWithoutNewsInput)
    create!: userCreateWithoutNewsInput;
}

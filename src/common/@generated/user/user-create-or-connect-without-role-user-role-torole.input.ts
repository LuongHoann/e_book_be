import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutRole_user_roleToroleInput } from './user-create-without-role-user-role-torole.input';

@InputType()
export class userCreateOrConnectWithoutRole_user_roleToroleInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutRole_user_roleToroleInput, {nullable:false})
    @Type(() => userCreateWithoutRole_user_roleToroleInput)
    create!: userCreateWithoutRole_user_roleToroleInput;
}

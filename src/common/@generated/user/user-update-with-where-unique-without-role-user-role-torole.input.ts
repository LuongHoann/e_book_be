import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutRole_user_roleToroleInput } from './user-update-without-role-user-role-torole.input';

@InputType()
export class userUpdateWithWhereUniqueWithoutRole_user_roleToroleInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userUpdateWithoutRole_user_roleToroleInput, {nullable:false})
    @Type(() => userUpdateWithoutRole_user_roleToroleInput)
    data!: userUpdateWithoutRole_user_roleToroleInput;
}

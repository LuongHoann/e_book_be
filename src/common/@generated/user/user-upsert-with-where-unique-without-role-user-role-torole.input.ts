import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutRole_user_roleToroleInput } from './user-update-without-role-user-role-torole.input';
import { userCreateWithoutRole_user_roleToroleInput } from './user-create-without-role-user-role-torole.input';

@InputType()
export class userUpsertWithWhereUniqueWithoutRole_user_roleToroleInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userUpdateWithoutRole_user_roleToroleInput, {nullable:false})
    @Type(() => userUpdateWithoutRole_user_roleToroleInput)
    update!: userUpdateWithoutRole_user_roleToroleInput;

    @Field(() => userCreateWithoutRole_user_roleToroleInput, {nullable:false})
    @Type(() => userCreateWithoutRole_user_roleToroleInput)
    create!: userCreateWithoutRole_user_roleToroleInput;
}

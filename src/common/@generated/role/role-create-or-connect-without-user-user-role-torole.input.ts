import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { roleCreateWithoutUser_user_roleToroleInput } from './role-create-without-user-user-role-torole.input';

@InputType()
export class roleCreateOrConnectWithoutUser_user_roleToroleInput {

    @Field(() => roleWhereUniqueInput, {nullable:false})
    @Type(() => roleWhereUniqueInput)
    where!: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;

    @Field(() => roleCreateWithoutUser_user_roleToroleInput, {nullable:false})
    @Type(() => roleCreateWithoutUser_user_roleToroleInput)
    create!: roleCreateWithoutUser_user_roleToroleInput;
}

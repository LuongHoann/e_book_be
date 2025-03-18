import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleCreateWithoutUser_user_roleToroleInput } from './role-create-without-user-user-role-torole.input';
import { Type } from 'class-transformer';
import { roleCreateOrConnectWithoutUser_user_roleToroleInput } from './role-create-or-connect-without-user-user-role-torole.input';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class roleCreateNestedOneWithoutUser_user_roleToroleInput {

    @Field(() => roleCreateWithoutUser_user_roleToroleInput, {nullable:true})
    @Type(() => roleCreateWithoutUser_user_roleToroleInput)
    create?: roleCreateWithoutUser_user_roleToroleInput;

    @Field(() => roleCreateOrConnectWithoutUser_user_roleToroleInput, {nullable:true})
    @Type(() => roleCreateOrConnectWithoutUser_user_roleToroleInput)
    connectOrCreate?: roleCreateOrConnectWithoutUser_user_roleToroleInput;

    @Field(() => roleWhereUniqueInput, {nullable:true})
    @Type(() => roleWhereUniqueInput)
    connect?: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;
}

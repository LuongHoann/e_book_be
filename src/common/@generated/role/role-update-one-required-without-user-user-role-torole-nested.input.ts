import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleCreateWithoutUser_user_roleToroleInput } from './role-create-without-user-user-role-torole.input';
import { Type } from 'class-transformer';
import { roleCreateOrConnectWithoutUser_user_roleToroleInput } from './role-create-or-connect-without-user-user-role-torole.input';
import { roleUpsertWithoutUser_user_roleToroleInput } from './role-upsert-without-user-user-role-torole.input';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';
import { roleUpdateToOneWithWhereWithoutUser_user_roleToroleInput } from './role-update-to-one-with-where-without-user-user-role-torole.input';

@InputType()
export class roleUpdateOneRequiredWithoutUser_user_roleToroleNestedInput {

    @Field(() => roleCreateWithoutUser_user_roleToroleInput, {nullable:true})
    @Type(() => roleCreateWithoutUser_user_roleToroleInput)
    create?: roleCreateWithoutUser_user_roleToroleInput;

    @Field(() => roleCreateOrConnectWithoutUser_user_roleToroleInput, {nullable:true})
    @Type(() => roleCreateOrConnectWithoutUser_user_roleToroleInput)
    connectOrCreate?: roleCreateOrConnectWithoutUser_user_roleToroleInput;

    @Field(() => roleUpsertWithoutUser_user_roleToroleInput, {nullable:true})
    @Type(() => roleUpsertWithoutUser_user_roleToroleInput)
    upsert?: roleUpsertWithoutUser_user_roleToroleInput;

    @Field(() => roleWhereUniqueInput, {nullable:true})
    @Type(() => roleWhereUniqueInput)
    connect?: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;

    @Field(() => roleUpdateToOneWithWhereWithoutUser_user_roleToroleInput, {nullable:true})
    @Type(() => roleUpdateToOneWithWhereWithoutUser_user_roleToroleInput)
    update?: roleUpdateToOneWithWhereWithoutUser_user_roleToroleInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { roleUpdateWithoutUser_role_user_idTouserInput } from './role-update-without-user-role-user-id-touser.input';
import { roleCreateWithoutUser_role_user_idTouserInput } from './role-create-without-user-role-user-id-touser.input';

@InputType()
export class roleUpsertWithWhereUniqueWithoutUser_role_user_idTouserInput {

    @Field(() => roleWhereUniqueInput, {nullable:false})
    @Type(() => roleWhereUniqueInput)
    where!: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;

    @Field(() => roleUpdateWithoutUser_role_user_idTouserInput, {nullable:false})
    @Type(() => roleUpdateWithoutUser_role_user_idTouserInput)
    update!: roleUpdateWithoutUser_role_user_idTouserInput;

    @Field(() => roleCreateWithoutUser_role_user_idTouserInput, {nullable:false})
    @Type(() => roleCreateWithoutUser_role_user_idTouserInput)
    create!: roleCreateWithoutUser_role_user_idTouserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { roleCreateWithoutUser_role_user_idTouserInput } from './role-create-without-user-role-user-id-touser.input';

@InputType()
export class roleCreateOrConnectWithoutUser_role_user_idTouserInput {

    @Field(() => roleWhereUniqueInput, {nullable:false})
    @Type(() => roleWhereUniqueInput)
    where!: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;

    @Field(() => roleCreateWithoutUser_role_user_idTouserInput, {nullable:false})
    @Type(() => roleCreateWithoutUser_role_user_idTouserInput)
    create!: roleCreateWithoutUser_role_user_idTouserInput;
}

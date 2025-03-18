import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleUpdateWithoutUser_user_roleToroleInput } from './role-update-without-user-user-role-torole.input';
import { Type } from 'class-transformer';
import { roleCreateWithoutUser_user_roleToroleInput } from './role-create-without-user-user-role-torole.input';
import { roleWhereInput } from './role-where.input';

@InputType()
export class roleUpsertWithoutUser_user_roleToroleInput {

    @Field(() => roleUpdateWithoutUser_user_roleToroleInput, {nullable:false})
    @Type(() => roleUpdateWithoutUser_user_roleToroleInput)
    update!: roleUpdateWithoutUser_user_roleToroleInput;

    @Field(() => roleCreateWithoutUser_user_roleToroleInput, {nullable:false})
    @Type(() => roleCreateWithoutUser_user_roleToroleInput)
    create!: roleCreateWithoutUser_user_roleToroleInput;

    @Field(() => roleWhereInput, {nullable:true})
    @Type(() => roleWhereInput)
    where?: roleWhereInput;
}

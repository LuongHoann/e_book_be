import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { roleUpdateWithoutUser_user_roleToroleInput } from './role-update-without-user-user-role-torole.input';

@InputType()
export class roleUpdateToOneWithWhereWithoutUser_user_roleToroleInput {

    @Field(() => roleWhereInput, {nullable:true})
    @Type(() => roleWhereInput)
    where?: roleWhereInput;

    @Field(() => roleUpdateWithoutUser_user_roleToroleInput, {nullable:false})
    @Type(() => roleUpdateWithoutUser_user_roleToroleInput)
    data!: roleUpdateWithoutUser_user_roleToroleInput;
}

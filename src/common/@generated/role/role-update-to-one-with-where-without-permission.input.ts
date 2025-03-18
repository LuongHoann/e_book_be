import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { roleUpdateWithoutPermissionInput } from './role-update-without-permission.input';

@InputType()
export class roleUpdateToOneWithWhereWithoutPermissionInput {

    @Field(() => roleWhereInput, {nullable:true})
    @Type(() => roleWhereInput)
    where?: roleWhereInput;

    @Field(() => roleUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => roleUpdateWithoutPermissionInput)
    data!: roleUpdateWithoutPermissionInput;
}

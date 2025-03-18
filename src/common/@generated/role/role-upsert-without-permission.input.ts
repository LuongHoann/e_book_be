import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleUpdateWithoutPermissionInput } from './role-update-without-permission.input';
import { Type } from 'class-transformer';
import { roleCreateWithoutPermissionInput } from './role-create-without-permission.input';
import { roleWhereInput } from './role-where.input';

@InputType()
export class roleUpsertWithoutPermissionInput {

    @Field(() => roleUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => roleUpdateWithoutPermissionInput)
    update!: roleUpdateWithoutPermissionInput;

    @Field(() => roleCreateWithoutPermissionInput, {nullable:false})
    @Type(() => roleCreateWithoutPermissionInput)
    create!: roleCreateWithoutPermissionInput;

    @Field(() => roleWhereInput, {nullable:true})
    @Type(() => roleWhereInput)
    where?: roleWhereInput;
}

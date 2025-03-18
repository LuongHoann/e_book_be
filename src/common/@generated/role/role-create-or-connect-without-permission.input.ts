import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { roleCreateWithoutPermissionInput } from './role-create-without-permission.input';

@InputType()
export class roleCreateOrConnectWithoutPermissionInput {

    @Field(() => roleWhereUniqueInput, {nullable:false})
    @Type(() => roleWhereUniqueInput)
    where!: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;

    @Field(() => roleCreateWithoutPermissionInput, {nullable:false})
    @Type(() => roleCreateWithoutPermissionInput)
    create!: roleCreateWithoutPermissionInput;
}

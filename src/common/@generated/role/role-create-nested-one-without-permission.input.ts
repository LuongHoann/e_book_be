import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleCreateWithoutPermissionInput } from './role-create-without-permission.input';
import { Type } from 'class-transformer';
import { roleCreateOrConnectWithoutPermissionInput } from './role-create-or-connect-without-permission.input';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class roleCreateNestedOneWithoutPermissionInput {

    @Field(() => roleCreateWithoutPermissionInput, {nullable:true})
    @Type(() => roleCreateWithoutPermissionInput)
    create?: roleCreateWithoutPermissionInput;

    @Field(() => roleCreateOrConnectWithoutPermissionInput, {nullable:true})
    @Type(() => roleCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: roleCreateOrConnectWithoutPermissionInput;

    @Field(() => roleWhereUniqueInput, {nullable:true})
    @Type(() => roleWhereUniqueInput)
    connect?: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;
}

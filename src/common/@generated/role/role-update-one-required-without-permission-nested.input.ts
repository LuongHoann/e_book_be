import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleCreateWithoutPermissionInput } from './role-create-without-permission.input';
import { Type } from 'class-transformer';
import { roleCreateOrConnectWithoutPermissionInput } from './role-create-or-connect-without-permission.input';
import { roleUpsertWithoutPermissionInput } from './role-upsert-without-permission.input';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';
import { roleUpdateToOneWithWhereWithoutPermissionInput } from './role-update-to-one-with-where-without-permission.input';

@InputType()
export class roleUpdateOneRequiredWithoutPermissionNestedInput {

    @Field(() => roleCreateWithoutPermissionInput, {nullable:true})
    @Type(() => roleCreateWithoutPermissionInput)
    create?: roleCreateWithoutPermissionInput;

    @Field(() => roleCreateOrConnectWithoutPermissionInput, {nullable:true})
    @Type(() => roleCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: roleCreateOrConnectWithoutPermissionInput;

    @Field(() => roleUpsertWithoutPermissionInput, {nullable:true})
    @Type(() => roleUpsertWithoutPermissionInput)
    upsert?: roleUpsertWithoutPermissionInput;

    @Field(() => roleWhereUniqueInput, {nullable:true})
    @Type(() => roleWhereUniqueInput)
    connect?: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;

    @Field(() => roleUpdateToOneWithWhereWithoutPermissionInput, {nullable:true})
    @Type(() => roleUpdateToOneWithWhereWithoutPermissionInput)
    update?: roleUpdateToOneWithWhereWithoutPermissionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { permissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { permissionUpdateWithoutRoleInput } from './permission-update-without-role.input';
import { permissionCreateWithoutRoleInput } from './permission-create-without-role.input';

@InputType()
export class permissionUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => permissionWhereUniqueInput, {nullable:false})
    @Type(() => permissionWhereUniqueInput)
    where!: Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>;

    @Field(() => permissionUpdateWithoutRoleInput, {nullable:false})
    @Type(() => permissionUpdateWithoutRoleInput)
    update!: permissionUpdateWithoutRoleInput;

    @Field(() => permissionCreateWithoutRoleInput, {nullable:false})
    @Type(() => permissionCreateWithoutRoleInput)
    create!: permissionCreateWithoutRoleInput;
}

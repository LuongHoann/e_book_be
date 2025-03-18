import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { permissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { permissionCreateWithoutRoleInput } from './permission-create-without-role.input';

@InputType()
export class permissionCreateOrConnectWithoutRoleInput {

    @Field(() => permissionWhereUniqueInput, {nullable:false})
    @Type(() => permissionWhereUniqueInput)
    where!: Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>;

    @Field(() => permissionCreateWithoutRoleInput, {nullable:false})
    @Type(() => permissionCreateWithoutRoleInput)
    create!: permissionCreateWithoutRoleInput;
}

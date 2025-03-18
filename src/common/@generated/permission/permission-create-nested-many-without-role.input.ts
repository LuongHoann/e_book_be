import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionCreateWithoutRoleInput } from './permission-create-without-role.input';
import { Type } from 'class-transformer';
import { permissionCreateOrConnectWithoutRoleInput } from './permission-create-or-connect-without-role.input';
import { permissionCreateManyRoleInputEnvelope } from './permission-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { permissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class permissionCreateNestedManyWithoutRoleInput {

    @Field(() => [permissionCreateWithoutRoleInput], {nullable:true})
    @Type(() => permissionCreateWithoutRoleInput)
    create?: Array<permissionCreateWithoutRoleInput>;

    @Field(() => [permissionCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => permissionCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<permissionCreateOrConnectWithoutRoleInput>;

    @Field(() => permissionCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => permissionCreateManyRoleInputEnvelope)
    createMany?: permissionCreateManyRoleInputEnvelope;

    @Field(() => [permissionWhereUniqueInput], {nullable:true})
    @Type(() => permissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionCreateWithoutRoleInput } from './permission-create-without-role.input';
import { Type } from 'class-transformer';
import { permissionCreateOrConnectWithoutRoleInput } from './permission-create-or-connect-without-role.input';
import { permissionUpsertWithWhereUniqueWithoutRoleInput } from './permission-upsert-with-where-unique-without-role.input';
import { permissionCreateManyRoleInputEnvelope } from './permission-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { permissionWhereUniqueInput } from './permission-where-unique.input';
import { permissionUpdateWithWhereUniqueWithoutRoleInput } from './permission-update-with-where-unique-without-role.input';
import { permissionUpdateManyWithWhereWithoutRoleInput } from './permission-update-many-with-where-without-role.input';
import { permissionScalarWhereInput } from './permission-scalar-where.input';

@InputType()
export class permissionUncheckedUpdateManyWithoutRoleNestedInput {

    @Field(() => [permissionCreateWithoutRoleInput], {nullable:true})
    @Type(() => permissionCreateWithoutRoleInput)
    create?: Array<permissionCreateWithoutRoleInput>;

    @Field(() => [permissionCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => permissionCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<permissionCreateOrConnectWithoutRoleInput>;

    @Field(() => [permissionUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => permissionUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<permissionUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => permissionCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => permissionCreateManyRoleInputEnvelope)
    createMany?: permissionCreateManyRoleInputEnvelope;

    @Field(() => [permissionWhereUniqueInput], {nullable:true})
    @Type(() => permissionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>>;

    @Field(() => [permissionWhereUniqueInput], {nullable:true})
    @Type(() => permissionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>>;

    @Field(() => [permissionWhereUniqueInput], {nullable:true})
    @Type(() => permissionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>>;

    @Field(() => [permissionWhereUniqueInput], {nullable:true})
    @Type(() => permissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>>;

    @Field(() => [permissionUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => permissionUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<permissionUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [permissionUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => permissionUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<permissionUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [permissionScalarWhereInput], {nullable:true})
    @Type(() => permissionScalarWhereInput)
    deleteMany?: Array<permissionScalarWhereInput>;
}

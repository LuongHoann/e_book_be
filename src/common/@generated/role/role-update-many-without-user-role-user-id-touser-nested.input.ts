import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleCreateWithoutUser_role_user_idTouserInput } from './role-create-without-user-role-user-id-touser.input';
import { Type } from 'class-transformer';
import { roleCreateOrConnectWithoutUser_role_user_idTouserInput } from './role-create-or-connect-without-user-role-user-id-touser.input';
import { roleUpsertWithWhereUniqueWithoutUser_role_user_idTouserInput } from './role-upsert-with-where-unique-without-user-role-user-id-touser.input';
import { roleCreateManyUser_role_user_idTouserInputEnvelope } from './role-create-many-user-role-user-id-touser-input-envelope.input';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';
import { roleUpdateWithWhereUniqueWithoutUser_role_user_idTouserInput } from './role-update-with-where-unique-without-user-role-user-id-touser.input';
import { roleUpdateManyWithWhereWithoutUser_role_user_idTouserInput } from './role-update-many-with-where-without-user-role-user-id-touser.input';
import { roleScalarWhereInput } from './role-scalar-where.input';

@InputType()
export class roleUpdateManyWithoutUser_role_user_idTouserNestedInput {

    @Field(() => [roleCreateWithoutUser_role_user_idTouserInput], {nullable:true})
    @Type(() => roleCreateWithoutUser_role_user_idTouserInput)
    create?: Array<roleCreateWithoutUser_role_user_idTouserInput>;

    @Field(() => [roleCreateOrConnectWithoutUser_role_user_idTouserInput], {nullable:true})
    @Type(() => roleCreateOrConnectWithoutUser_role_user_idTouserInput)
    connectOrCreate?: Array<roleCreateOrConnectWithoutUser_role_user_idTouserInput>;

    @Field(() => [roleUpsertWithWhereUniqueWithoutUser_role_user_idTouserInput], {nullable:true})
    @Type(() => roleUpsertWithWhereUniqueWithoutUser_role_user_idTouserInput)
    upsert?: Array<roleUpsertWithWhereUniqueWithoutUser_role_user_idTouserInput>;

    @Field(() => roleCreateManyUser_role_user_idTouserInputEnvelope, {nullable:true})
    @Type(() => roleCreateManyUser_role_user_idTouserInputEnvelope)
    createMany?: roleCreateManyUser_role_user_idTouserInputEnvelope;

    @Field(() => [roleWhereUniqueInput], {nullable:true})
    @Type(() => roleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<roleWhereUniqueInput, 'id'>>;

    @Field(() => [roleWhereUniqueInput], {nullable:true})
    @Type(() => roleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<roleWhereUniqueInput, 'id'>>;

    @Field(() => [roleWhereUniqueInput], {nullable:true})
    @Type(() => roleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<roleWhereUniqueInput, 'id'>>;

    @Field(() => [roleWhereUniqueInput], {nullable:true})
    @Type(() => roleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<roleWhereUniqueInput, 'id'>>;

    @Field(() => [roleUpdateWithWhereUniqueWithoutUser_role_user_idTouserInput], {nullable:true})
    @Type(() => roleUpdateWithWhereUniqueWithoutUser_role_user_idTouserInput)
    update?: Array<roleUpdateWithWhereUniqueWithoutUser_role_user_idTouserInput>;

    @Field(() => [roleUpdateManyWithWhereWithoutUser_role_user_idTouserInput], {nullable:true})
    @Type(() => roleUpdateManyWithWhereWithoutUser_role_user_idTouserInput)
    updateMany?: Array<roleUpdateManyWithWhereWithoutUser_role_user_idTouserInput>;

    @Field(() => [roleScalarWhereInput], {nullable:true})
    @Type(() => roleScalarWhereInput)
    deleteMany?: Array<roleScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleCreateWithoutUser_role_user_idTouserInput } from './role-create-without-user-role-user-id-touser.input';
import { Type } from 'class-transformer';
import { roleCreateOrConnectWithoutUser_role_user_idTouserInput } from './role-create-or-connect-without-user-role-user-id-touser.input';
import { roleCreateManyUser_role_user_idTouserInputEnvelope } from './role-create-many-user-role-user-id-touser-input-envelope.input';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class roleUncheckedCreateNestedManyWithoutUser_role_user_idTouserInput {

    @Field(() => [roleCreateWithoutUser_role_user_idTouserInput], {nullable:true})
    @Type(() => roleCreateWithoutUser_role_user_idTouserInput)
    create?: Array<roleCreateWithoutUser_role_user_idTouserInput>;

    @Field(() => [roleCreateOrConnectWithoutUser_role_user_idTouserInput], {nullable:true})
    @Type(() => roleCreateOrConnectWithoutUser_role_user_idTouserInput)
    connectOrCreate?: Array<roleCreateOrConnectWithoutUser_role_user_idTouserInput>;

    @Field(() => roleCreateManyUser_role_user_idTouserInputEnvelope, {nullable:true})
    @Type(() => roleCreateManyUser_role_user_idTouserInputEnvelope)
    createMany?: roleCreateManyUser_role_user_idTouserInputEnvelope;

    @Field(() => [roleWhereUniqueInput], {nullable:true})
    @Type(() => roleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<roleWhereUniqueInput, 'id'>>;
}

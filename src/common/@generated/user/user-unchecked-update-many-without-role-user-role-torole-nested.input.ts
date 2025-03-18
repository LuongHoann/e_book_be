import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutRole_user_roleToroleInput } from './user-create-without-role-user-role-torole.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutRole_user_roleToroleInput } from './user-create-or-connect-without-role-user-role-torole.input';
import { userUpsertWithWhereUniqueWithoutRole_user_roleToroleInput } from './user-upsert-with-where-unique-without-role-user-role-torole.input';
import { userCreateManyRole_user_roleToroleInputEnvelope } from './user-create-many-role-user-role-torole-input-envelope.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { userUpdateWithWhereUniqueWithoutRole_user_roleToroleInput } from './user-update-with-where-unique-without-role-user-role-torole.input';
import { userUpdateManyWithWhereWithoutRole_user_roleToroleInput } from './user-update-many-with-where-without-role-user-role-torole.input';
import { userScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class userUncheckedUpdateManyWithoutRole_user_roleToroleNestedInput {

    @Field(() => [userCreateWithoutRole_user_roleToroleInput], {nullable:true})
    @Type(() => userCreateWithoutRole_user_roleToroleInput)
    create?: Array<userCreateWithoutRole_user_roleToroleInput>;

    @Field(() => [userCreateOrConnectWithoutRole_user_roleToroleInput], {nullable:true})
    @Type(() => userCreateOrConnectWithoutRole_user_roleToroleInput)
    connectOrCreate?: Array<userCreateOrConnectWithoutRole_user_roleToroleInput>;

    @Field(() => [userUpsertWithWhereUniqueWithoutRole_user_roleToroleInput], {nullable:true})
    @Type(() => userUpsertWithWhereUniqueWithoutRole_user_roleToroleInput)
    upsert?: Array<userUpsertWithWhereUniqueWithoutRole_user_roleToroleInput>;

    @Field(() => userCreateManyRole_user_roleToroleInputEnvelope, {nullable:true})
    @Type(() => userCreateManyRole_user_roleToroleInputEnvelope)
    createMany?: userCreateManyRole_user_roleToroleInputEnvelope;

    @Field(() => [userWhereUniqueInput], {nullable:true})
    @Type(() => userWhereUniqueInput)
    set?: Array<Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [userWhereUniqueInput], {nullable:true})
    @Type(() => userWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [userWhereUniqueInput], {nullable:true})
    @Type(() => userWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [userWhereUniqueInput], {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [userUpdateWithWhereUniqueWithoutRole_user_roleToroleInput], {nullable:true})
    @Type(() => userUpdateWithWhereUniqueWithoutRole_user_roleToroleInput)
    update?: Array<userUpdateWithWhereUniqueWithoutRole_user_roleToroleInput>;

    @Field(() => [userUpdateManyWithWhereWithoutRole_user_roleToroleInput], {nullable:true})
    @Type(() => userUpdateManyWithWhereWithoutRole_user_roleToroleInput)
    updateMany?: Array<userUpdateManyWithWhereWithoutRole_user_roleToroleInput>;

    @Field(() => [userScalarWhereInput], {nullable:true})
    @Type(() => userScalarWhereInput)
    deleteMany?: Array<userScalarWhereInput>;
}

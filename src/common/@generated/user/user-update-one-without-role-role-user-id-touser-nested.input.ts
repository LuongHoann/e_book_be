import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutRole_role_user_idTouserInput } from './user-create-without-role-role-user-id-touser.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutRole_role_user_idTouserInput } from './user-create-or-connect-without-role-role-user-id-touser.input';
import { userUpsertWithoutRole_role_user_idTouserInput } from './user-upsert-without-role-role-user-id-touser.input';
import { userWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { userUpdateToOneWithWhereWithoutRole_role_user_idTouserInput } from './user-update-to-one-with-where-without-role-role-user-id-touser.input';

@InputType()
export class userUpdateOneWithoutRole_role_user_idTouserNestedInput {

    @Field(() => userCreateWithoutRole_role_user_idTouserInput, {nullable:true})
    @Type(() => userCreateWithoutRole_role_user_idTouserInput)
    create?: userCreateWithoutRole_role_user_idTouserInput;

    @Field(() => userCreateOrConnectWithoutRole_role_user_idTouserInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutRole_role_user_idTouserInput)
    connectOrCreate?: userCreateOrConnectWithoutRole_role_user_idTouserInput;

    @Field(() => userUpsertWithoutRole_role_user_idTouserInput, {nullable:true})
    @Type(() => userUpsertWithoutRole_role_user_idTouserInput)
    upsert?: userUpsertWithoutRole_role_user_idTouserInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    disconnect?: userWhereInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    delete?: userWhereInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userUpdateToOneWithWhereWithoutRole_role_user_idTouserInput, {nullable:true})
    @Type(() => userUpdateToOneWithWhereWithoutRole_role_user_idTouserInput)
    update?: userUpdateToOneWithWhereWithoutRole_role_user_idTouserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutRole_role_user_idTouserInput } from './user-create-without-role-role-user-id-touser.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutRole_role_user_idTouserInput } from './user-create-or-connect-without-role-role-user-id-touser.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class userCreateNestedOneWithoutRole_role_user_idTouserInput {

    @Field(() => userCreateWithoutRole_role_user_idTouserInput, {nullable:true})
    @Type(() => userCreateWithoutRole_role_user_idTouserInput)
    create?: userCreateWithoutRole_role_user_idTouserInput;

    @Field(() => userCreateOrConnectWithoutRole_role_user_idTouserInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutRole_role_user_idTouserInput)
    connectOrCreate?: userCreateOrConnectWithoutRole_role_user_idTouserInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;
}

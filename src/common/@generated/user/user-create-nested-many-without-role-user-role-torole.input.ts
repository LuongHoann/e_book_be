import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutRole_user_roleToroleInput } from './user-create-without-role-user-role-torole.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutRole_user_roleToroleInput } from './user-create-or-connect-without-role-user-role-torole.input';
import { userCreateManyRole_user_roleToroleInputEnvelope } from './user-create-many-role-user-role-torole-input-envelope.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class userCreateNestedManyWithoutRole_user_roleToroleInput {

    @Field(() => [userCreateWithoutRole_user_roleToroleInput], {nullable:true})
    @Type(() => userCreateWithoutRole_user_roleToroleInput)
    create?: Array<userCreateWithoutRole_user_roleToroleInput>;

    @Field(() => [userCreateOrConnectWithoutRole_user_roleToroleInput], {nullable:true})
    @Type(() => userCreateOrConnectWithoutRole_user_roleToroleInput)
    connectOrCreate?: Array<userCreateOrConnectWithoutRole_user_roleToroleInput>;

    @Field(() => userCreateManyRole_user_roleToroleInputEnvelope, {nullable:true})
    @Type(() => userCreateManyRole_user_roleToroleInputEnvelope)
    createMany?: userCreateManyRole_user_roleToroleInputEnvelope;

    @Field(() => [userWhereUniqueInput], {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>>;
}

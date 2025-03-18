import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutRole_role_user_idTouserInput } from './user-create-without-role-role-user-id-touser.input';

@InputType()
export class userCreateOrConnectWithoutRole_role_user_idTouserInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutRole_role_user_idTouserInput, {nullable:false})
    @Type(() => userCreateWithoutRole_role_user_idTouserInput)
    create!: userCreateWithoutRole_role_user_idTouserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateWithoutRole_role_user_idTouserInput } from './user-update-without-role-role-user-id-touser.input';
import { Type } from 'class-transformer';
import { userCreateWithoutRole_role_user_idTouserInput } from './user-create-without-role-role-user-id-touser.input';
import { userWhereInput } from './user-where.input';

@InputType()
export class userUpsertWithoutRole_role_user_idTouserInput {

    @Field(() => userUpdateWithoutRole_role_user_idTouserInput, {nullable:false})
    @Type(() => userUpdateWithoutRole_role_user_idTouserInput)
    update!: userUpdateWithoutRole_role_user_idTouserInput;

    @Field(() => userCreateWithoutRole_role_user_idTouserInput, {nullable:false})
    @Type(() => userCreateWithoutRole_role_user_idTouserInput)
    create!: userCreateWithoutRole_role_user_idTouserInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;
}

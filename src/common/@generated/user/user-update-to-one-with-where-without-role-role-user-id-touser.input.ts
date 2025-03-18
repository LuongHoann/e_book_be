import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutRole_role_user_idTouserInput } from './user-update-without-role-role-user-id-touser.input';

@InputType()
export class userUpdateToOneWithWhereWithoutRole_role_user_idTouserInput {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => userUpdateWithoutRole_role_user_idTouserInput, {nullable:false})
    @Type(() => userUpdateWithoutRole_role_user_idTouserInput)
    data!: userUpdateWithoutRole_role_user_idTouserInput;
}

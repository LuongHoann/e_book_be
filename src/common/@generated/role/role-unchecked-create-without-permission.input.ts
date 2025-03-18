import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { userUncheckedCreateNestedManyWithoutRole_user_roleToroleInput } from '../user/user-unchecked-create-nested-many-without-role-user-role-torole.input';

@InputType()
export class roleUncheckedCreateWithoutPermissionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    role_name!: string;

    @Field(() => userUncheckedCreateNestedManyWithoutRole_user_roleToroleInput, {nullable:true})
    user_user_roleTorole?: userUncheckedCreateNestedManyWithoutRole_user_roleToroleInput;
}

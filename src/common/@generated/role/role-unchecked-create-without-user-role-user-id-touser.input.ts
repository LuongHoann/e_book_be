import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { permissionUncheckedCreateNestedManyWithoutRoleInput } from '../permission/permission-unchecked-create-nested-many-without-role.input';
import { userUncheckedCreateNestedManyWithoutRole_user_roleToroleInput } from '../user/user-unchecked-create-nested-many-without-role-user-role-torole.input';

@InputType()
export class roleUncheckedCreateWithoutUser_role_user_idTouserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    role_name!: string;

    @Field(() => permissionUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permission?: permissionUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => userUncheckedCreateNestedManyWithoutRole_user_roleToroleInput, {nullable:true})
    user_user_roleTorole?: userUncheckedCreateNestedManyWithoutRole_user_roleToroleInput;
}

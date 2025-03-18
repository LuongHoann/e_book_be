import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionCreateNestedManyWithoutRoleInput } from '../permission/permission-create-nested-many-without-role.input';
import { userCreateNestedManyWithoutRole_user_roleToroleInput } from '../user/user-create-nested-many-without-role-user-role-torole.input';

@InputType()
export class roleCreateWithoutUser_role_user_idTouserInput {

    @Field(() => String, {nullable:false})
    role_name!: string;

    @Field(() => permissionCreateNestedManyWithoutRoleInput, {nullable:true})
    permission?: permissionCreateNestedManyWithoutRoleInput;

    @Field(() => userCreateNestedManyWithoutRole_user_roleToroleInput, {nullable:true})
    user_user_roleTorole?: userCreateNestedManyWithoutRole_user_roleToroleInput;
}

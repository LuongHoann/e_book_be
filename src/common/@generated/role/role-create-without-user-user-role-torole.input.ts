import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionCreateNestedManyWithoutRoleInput } from '../permission/permission-create-nested-many-without-role.input';

@InputType()
export class roleCreateWithoutUser_user_roleToroleInput {

    @Field(() => String, {nullable:false})
    role_name!: string;

    @Field(() => permissionCreateNestedManyWithoutRoleInput, {nullable:true})
    permission?: permissionCreateNestedManyWithoutRoleInput;
}

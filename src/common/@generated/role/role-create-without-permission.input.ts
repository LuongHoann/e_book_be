import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateNestedManyWithoutRole_user_roleToroleInput } from '../user/user-create-nested-many-without-role-user-role-torole.input';

@InputType()
export class roleCreateWithoutPermissionInput {

    @Field(() => String, {nullable:false})
    role_name!: string;

    @Field(() => userCreateNestedManyWithoutRole_user_roleToroleInput, {nullable:true})
    user_user_roleTorole?: userCreateNestedManyWithoutRole_user_roleToroleInput;
}

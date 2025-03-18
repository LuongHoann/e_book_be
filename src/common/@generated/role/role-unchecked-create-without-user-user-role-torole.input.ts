import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { permissionUncheckedCreateNestedManyWithoutRoleInput } from '../permission/permission-unchecked-create-nested-many-without-role.input';

@InputType()
export class roleUncheckedCreateWithoutUser_user_roleToroleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    role_name!: string;

    @Field(() => permissionUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permission?: permissionUncheckedCreateNestedManyWithoutRoleInput;
}

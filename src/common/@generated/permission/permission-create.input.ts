import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleCreateNestedOneWithoutPermissionInput } from '../role/role-create-nested-one-without-permission.input';

@InputType()
export class permissionCreateInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => roleCreateNestedOneWithoutPermissionInput, {nullable:false})
    role!: roleCreateNestedOneWithoutPermissionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { permissionUpdateManyWithoutRoleNestedInput } from '../permission/permission-update-many-without-role-nested.input';

@InputType()
export class roleUpdateWithoutUser_user_roleToroleInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role_name?: StringFieldUpdateOperationsInput;

    @Field(() => permissionUpdateManyWithoutRoleNestedInput, {nullable:true})
    permission?: permissionUpdateManyWithoutRoleNestedInput;
}

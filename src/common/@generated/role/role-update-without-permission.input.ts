import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { userUpdateManyWithoutRole_user_roleToroleNestedInput } from '../user/user-update-many-without-role-user-role-torole-nested.input';

@InputType()
export class roleUpdateWithoutPermissionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role_name?: StringFieldUpdateOperationsInput;

    @Field(() => userUpdateManyWithoutRole_user_roleToroleNestedInput, {nullable:true})
    user_user_roleTorole?: userUpdateManyWithoutRole_user_roleToroleNestedInput;
}

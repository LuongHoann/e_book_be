import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { permissionUncheckedUpdateManyWithoutRoleNestedInput } from '../permission/permission-unchecked-update-many-without-role-nested.input';

@InputType()
export class roleUncheckedUpdateWithoutUser_user_roleToroleInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role_name?: StringFieldUpdateOperationsInput;

    @Field(() => permissionUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    permission?: permissionUncheckedUpdateManyWithoutRoleNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { roleUpdateOneRequiredWithoutPermissionNestedInput } from '../role/role-update-one-required-without-permission-nested.input';

@InputType()
export class permissionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => roleUpdateOneRequiredWithoutPermissionNestedInput, {nullable:true})
    role?: roleUpdateOneRequiredWithoutPermissionNestedInput;
}

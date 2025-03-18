import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { userUncheckedUpdateManyWithoutRole_user_roleToroleNestedInput } from '../user/user-unchecked-update-many-without-role-user-role-torole-nested.input';

@InputType()
export class roleUncheckedUpdateWithoutPermissionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role_name?: StringFieldUpdateOperationsInput;

    @Field(() => userUncheckedUpdateManyWithoutRole_user_roleToroleNestedInput, {nullable:true})
    user_user_roleTorole?: userUncheckedUpdateManyWithoutRole_user_roleToroleNestedInput;
}

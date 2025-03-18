import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { commentUpdateManyWithoutUserNestedInput } from '../comment/comment-update-many-without-user-nested.input';
import { favouriteUpdateManyWithoutUserNestedInput } from '../favourite/favourite-update-many-without-user-nested.input';
import { license_ownershipUpdateManyWithoutUserNestedInput } from '../license-ownership/license-ownership-update-many-without-user-nested.input';
import { reading_historyUpdateManyWithoutUserNestedInput } from '../reading-history/reading-history-update-many-without-user-nested.input';
import { reviewUpdateManyWithoutUserNestedInput } from '../review/review-update-many-without-user-nested.input';
import { shopping_cartUpdateManyWithoutUserNestedInput } from '../shopping-cart/shopping-cart-update-many-without-user-nested.input';
import { transaction_historyUpdateManyWithoutUserNestedInput } from '../transaction-history/transaction-history-update-many-without-user-nested.input';
import { roleUpdateOneRequiredWithoutUser_user_roleToroleNestedInput } from '../role/role-update-one-required-without-user-user-role-torole-nested.input';

@InputType()
export class userUpdateWithoutNewsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    user_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expired_code?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    account_status?: BoolFieldUpdateOperationsInput;

    @Field(() => commentUpdateManyWithoutUserNestedInput, {nullable:true})
    comment?: commentUpdateManyWithoutUserNestedInput;

    @Field(() => favouriteUpdateManyWithoutUserNestedInput, {nullable:true})
    favourite?: favouriteUpdateManyWithoutUserNestedInput;

    @Field(() => license_ownershipUpdateManyWithoutUserNestedInput, {nullable:true})
    license_ownership?: license_ownershipUpdateManyWithoutUserNestedInput;

    @Field(() => reading_historyUpdateManyWithoutUserNestedInput, {nullable:true})
    reading_history?: reading_historyUpdateManyWithoutUserNestedInput;

    @Field(() => reviewUpdateManyWithoutUserNestedInput, {nullable:true})
    review?: reviewUpdateManyWithoutUserNestedInput;

    @Field(() => shopping_cartUpdateManyWithoutUserNestedInput, {nullable:true})
    shopping_cart?: shopping_cartUpdateManyWithoutUserNestedInput;

    @Field(() => transaction_historyUpdateManyWithoutUserNestedInput, {nullable:true})
    transaction_history?: transaction_historyUpdateManyWithoutUserNestedInput;

    @Field(() => roleUpdateOneRequiredWithoutUser_user_roleToroleNestedInput, {nullable:true})
    role_user_roleTorole?: roleUpdateOneRequiredWithoutUser_user_roleToroleNestedInput;
}

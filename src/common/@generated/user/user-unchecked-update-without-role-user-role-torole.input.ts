import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { commentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { favouriteUncheckedUpdateManyWithoutUserNestedInput } from '../favourite/favourite-unchecked-update-many-without-user-nested.input';
import { license_ownershipUncheckedUpdateManyWithoutUserNestedInput } from '../license-ownership/license-ownership-unchecked-update-many-without-user-nested.input';
import { newsUncheckedUpdateManyWithoutUserNestedInput } from '../news/news-unchecked-update-many-without-user-nested.input';
import { reading_historyUncheckedUpdateManyWithoutUserNestedInput } from '../reading-history/reading-history-unchecked-update-many-without-user-nested.input';
import { reviewUncheckedUpdateManyWithoutUserNestedInput } from '../review/review-unchecked-update-many-without-user-nested.input';
import { shopping_cartUncheckedUpdateManyWithoutUserNestedInput } from '../shopping-cart/shopping-cart-unchecked-update-many-without-user-nested.input';
import { transaction_historyUncheckedUpdateManyWithoutUserNestedInput } from '../transaction-history/transaction-history-unchecked-update-many-without-user-nested.input';

@InputType()
export class userUncheckedUpdateWithoutRole_user_roleToroleInput {

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

    @Field(() => commentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => favouriteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    favourite?: favouriteUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => license_ownershipUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    license_ownership?: license_ownershipUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => newsUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    news?: newsUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => reading_historyUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reading_history?: reading_historyUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => reviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => shopping_cartUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shopping_cart?: shopping_cartUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => transaction_historyUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    transaction_history?: transaction_historyUncheckedUpdateManyWithoutUserNestedInput;
}

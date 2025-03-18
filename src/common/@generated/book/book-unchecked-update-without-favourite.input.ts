import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { category_bookUncheckedUpdateManyWithoutBookNestedInput } from '../category-book/category-book-unchecked-update-many-without-book-nested.input';
import { commentUncheckedUpdateManyWithoutBookNestedInput } from '../comment/comment-unchecked-update-many-without-book-nested.input';
import { language_bookUncheckedUpdateManyWithoutBookNestedInput } from '../language-book/language-book-unchecked-update-many-without-book-nested.input';
import { licenseUncheckedUpdateManyWithoutBookNestedInput } from '../license/license-unchecked-update-many-without-book-nested.input';
import { Type } from 'class-transformer';
import { reading_historyUncheckedUpdateManyWithoutBookNestedInput } from '../reading-history/reading-history-unchecked-update-many-without-book-nested.input';
import { reviewUncheckedUpdateManyWithoutBookNestedInput } from '../review/review-unchecked-update-many-without-book-nested.input';
import { shopping_cartUncheckedUpdateManyWithoutBookNestedInput } from '../shopping-cart/shopping-cart-unchecked-update-many-without-book-nested.input';
import { transaction_historyUncheckedUpdateManyWithoutBookNestedInput } from '../transaction-history/transaction-history-unchecked-update-many-without-book-nested.input';

@InputType()
export class bookUncheckedUpdateWithoutFavouriteInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    book_title?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pushlied_at?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    author?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    isbn?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    page_number?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discount_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => category_bookUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    category_book?: category_bookUncheckedUpdateManyWithoutBookNestedInput;

    @Field(() => commentUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    comment?: commentUncheckedUpdateManyWithoutBookNestedInput;

    @Field(() => language_bookUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    language_book?: language_bookUncheckedUpdateManyWithoutBookNestedInput;

    @Field(() => licenseUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    @Type(() => licenseUncheckedUpdateManyWithoutBookNestedInput)
    license?: licenseUncheckedUpdateManyWithoutBookNestedInput;

    @Field(() => reading_historyUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    reading_history?: reading_historyUncheckedUpdateManyWithoutBookNestedInput;

    @Field(() => reviewUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    review?: reviewUncheckedUpdateManyWithoutBookNestedInput;

    @Field(() => shopping_cartUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    shopping_cart?: shopping_cartUncheckedUpdateManyWithoutBookNestedInput;

    @Field(() => transaction_historyUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    transaction_history?: transaction_historyUncheckedUpdateManyWithoutBookNestedInput;
}

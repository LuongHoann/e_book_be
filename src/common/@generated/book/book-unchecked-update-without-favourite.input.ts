import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { book_discountUncheckedUpdateManyWithoutBookNestedInput } from '../book-discount/book-discount-unchecked-update-many-without-book-nested.input';
import { Type } from 'class-transformer';
import { category_bookUncheckedUpdateManyWithoutBookNestedInput } from '../category-book/category-book-unchecked-update-many-without-book-nested.input';
import { commentUncheckedUpdateManyWithoutBookNestedInput } from '../comment/comment-unchecked-update-many-without-book-nested.input';
import { language_bookUncheckedUpdateManyWithoutBookNestedInput } from '../language-book/language-book-unchecked-update-many-without-book-nested.input';
import { licenseUncheckedUpdateManyWithoutBookNestedInput } from '../license/license-unchecked-update-many-without-book-nested.input';
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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    author?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    isbn?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    page_number?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner_key?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    book_key?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    published_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => book_discountUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    @Type(() => book_discountUncheckedUpdateManyWithoutBookNestedInput)
    book_discount?: book_discountUncheckedUpdateManyWithoutBookNestedInput;

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

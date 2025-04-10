import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { book_discountUpdateManyWithoutBookNestedInput } from '../book-discount/book-discount-update-many-without-book-nested.input';
import { Type } from 'class-transformer';
import { category_bookUpdateManyWithoutBookNestedInput } from '../category-book/category-book-update-many-without-book-nested.input';
import { commentUpdateManyWithoutBookNestedInput } from '../comment/comment-update-many-without-book-nested.input';
import { favouriteUpdateManyWithoutBookNestedInput } from '../favourite/favourite-update-many-without-book-nested.input';
import { language_bookUpdateManyWithoutBookNestedInput } from '../language-book/language-book-update-many-without-book-nested.input';
import { licenseUpdateManyWithoutBookNestedInput } from '../license/license-update-many-without-book-nested.input';
import { reviewUpdateManyWithoutBookNestedInput } from '../review/review-update-many-without-book-nested.input';
import { shopping_cartUpdateManyWithoutBookNestedInput } from '../shopping-cart/shopping-cart-update-many-without-book-nested.input';
import { transaction_historyUpdateManyWithoutBookNestedInput } from '../transaction-history/transaction-history-update-many-without-book-nested.input';

@InputType()
export class bookUpdateWithoutReading_historyInput {

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    published_at?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => book_discountUpdateManyWithoutBookNestedInput, {nullable:true})
    @Type(() => book_discountUpdateManyWithoutBookNestedInput)
    book_discount?: book_discountUpdateManyWithoutBookNestedInput;

    @Field(() => category_bookUpdateManyWithoutBookNestedInput, {nullable:true})
    category_book?: category_bookUpdateManyWithoutBookNestedInput;

    @Field(() => commentUpdateManyWithoutBookNestedInput, {nullable:true})
    comment?: commentUpdateManyWithoutBookNestedInput;

    @Field(() => favouriteUpdateManyWithoutBookNestedInput, {nullable:true})
    favourite?: favouriteUpdateManyWithoutBookNestedInput;

    @Field(() => language_bookUpdateManyWithoutBookNestedInput, {nullable:true})
    language_book?: language_bookUpdateManyWithoutBookNestedInput;

    @Field(() => licenseUpdateManyWithoutBookNestedInput, {nullable:true})
    @Type(() => licenseUpdateManyWithoutBookNestedInput)
    license?: licenseUpdateManyWithoutBookNestedInput;

    @Field(() => reviewUpdateManyWithoutBookNestedInput, {nullable:true})
    review?: reviewUpdateManyWithoutBookNestedInput;

    @Field(() => shopping_cartUpdateManyWithoutBookNestedInput, {nullable:true})
    shopping_cart?: shopping_cartUpdateManyWithoutBookNestedInput;

    @Field(() => transaction_historyUpdateManyWithoutBookNestedInput, {nullable:true})
    transaction_history?: transaction_historyUpdateManyWithoutBookNestedInput;
}

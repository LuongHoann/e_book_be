import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { book_discountUncheckedUpdateManyWithoutDiscount_codeNestedInput } from '../book-discount/book-discount-unchecked-update-many-without-discount-code-nested.input';

@InputType()
export class discount_codeUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    value?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    value_percent?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    area_code?: NullableStringFieldUpdateOperationsInput;

    @Field(() => book_discountUncheckedUpdateManyWithoutDiscount_codeNestedInput, {nullable:true})
    @Type(() => book_discountUncheckedUpdateManyWithoutDiscount_codeNestedInput)
    book_discount?: book_discountUncheckedUpdateManyWithoutDiscount_codeNestedInput;
}

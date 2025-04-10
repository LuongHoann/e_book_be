import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { book_discountUpdateManyWithoutDiscount_codeNestedInput } from '../book-discount/book-discount-update-many-without-discount-code-nested.input';
import { areaUpdateOneWithoutDiscount_codeNestedInput } from '../area/area-update-one-without-discount-code-nested.input';

@InputType()
export class discount_codeUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    discount_code_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    discount_value?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discount_value_percent?: NullableIntFieldUpdateOperationsInput;

    @Field(() => book_discountUpdateManyWithoutDiscount_codeNestedInput, {nullable:true})
    @Type(() => book_discountUpdateManyWithoutDiscount_codeNestedInput)
    book_discount?: book_discountUpdateManyWithoutDiscount_codeNestedInput;

    @Field(() => areaUpdateOneWithoutDiscount_codeNestedInput, {nullable:true})
    @Type(() => areaUpdateOneWithoutDiscount_codeNestedInput)
    area?: areaUpdateOneWithoutDiscount_codeNestedInput;
}

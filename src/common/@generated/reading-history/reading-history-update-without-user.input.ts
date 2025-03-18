import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { bookUpdateOneRequiredWithoutReading_historyNestedInput } from '../book/book-update-one-required-without-reading-history-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class reading_historyUpdateWithoutUserInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    state?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    page?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    update_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => bookUpdateOneRequiredWithoutReading_historyNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutReading_historyNestedInput)
    book?: bookUpdateOneRequiredWithoutReading_historyNestedInput;
}

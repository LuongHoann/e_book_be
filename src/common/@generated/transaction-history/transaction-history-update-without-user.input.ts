import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { bookUpdateOneRequiredWithoutTransaction_historyNestedInput } from '../book/book-update-one-required-without-transaction-history-nested.input';

@InputType()
export class transaction_historyUpdateWithoutUserInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    payment_date?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => bookUpdateOneRequiredWithoutTransaction_historyNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutTransaction_historyNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { bookUpdateOneRequiredWithoutTransaction_historyNestedInput } from '../book/book-update-one-required-without-transaction-history-nested.input';
import { Type } from 'class-transformer';
import { userUpdateOneRequiredWithoutTransaction_historyNestedInput } from '../user/user-update-one-required-without-transaction-history-nested.input';

@InputType()
export class transaction_historyUpdateInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    payment_date?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => bookUpdateOneRequiredWithoutTransaction_historyNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutTransaction_historyNestedInput)
    book?: bookUpdateOneRequiredWithoutTransaction_historyNestedInput;

    @Field(() => userUpdateOneRequiredWithoutTransaction_historyNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutTransaction_historyNestedInput;
}

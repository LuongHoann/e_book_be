import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { userUpdateOneRequiredWithoutTransaction_historyNestedInput } from '../user/user-update-one-required-without-transaction-history-nested.input';

@InputType()
export class transaction_historyUpdateWithoutBookInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    payment_date?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => userUpdateOneRequiredWithoutTransaction_historyNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutTransaction_historyNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';

@InputType()
export class transaction_historyUpdateManyMutationInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    payment_date?: NullableDateTimeFieldUpdateOperationsInput;
}

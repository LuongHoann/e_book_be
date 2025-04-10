import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class book_discountUncheckedUpdateManyWithoutDiscount_codeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    book_id?: StringFieldUpdateOperationsInput;
}

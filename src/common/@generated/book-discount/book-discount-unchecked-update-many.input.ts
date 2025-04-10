import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class book_discountUncheckedUpdateManyInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    book_id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    discount_id?: IntFieldUpdateOperationsInput;
}

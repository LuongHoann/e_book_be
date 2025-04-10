import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class book_discountUncheckedUpdateManyWithoutBookInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    discount_id?: IntFieldUpdateOperationsInput;
}

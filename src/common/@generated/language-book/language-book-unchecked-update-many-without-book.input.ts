import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class language_bookUncheckedUpdateManyWithoutBookInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    language_id?: IntFieldUpdateOperationsInput;
}

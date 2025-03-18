import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class areaUncheckedUpdateWithoutDiscount_codeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    area_name?: StringFieldUpdateOperationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { discount_codeUncheckedUpdateManyWithoutAreaNestedInput } from '../discount-code/discount-code-unchecked-update-many-without-area-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class areaUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => discount_codeUncheckedUpdateManyWithoutAreaNestedInput, {nullable:true})
    @Type(() => discount_codeUncheckedUpdateManyWithoutAreaNestedInput)
    discount_code?: discount_codeUncheckedUpdateManyWithoutAreaNestedInput;
}

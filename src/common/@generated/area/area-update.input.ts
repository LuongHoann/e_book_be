import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { discount_codeUpdateManyWithoutAreaNestedInput } from '../discount-code/discount-code-update-many-without-area-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class areaUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    area_name?: StringFieldUpdateOperationsInput;

    @Field(() => discount_codeUpdateManyWithoutAreaNestedInput, {nullable:true})
    @Type(() => discount_codeUpdateManyWithoutAreaNestedInput)
    discount_code?: discount_codeUpdateManyWithoutAreaNestedInput;
}

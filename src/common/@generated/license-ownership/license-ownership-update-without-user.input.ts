import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { licenseUpdateOneRequiredWithoutLicense_ownershipNestedInput } from '../license/license-update-one-required-without-license-ownership-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class license_ownershipUpdateWithoutUserInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    download_count?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiration_date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => licenseUpdateOneRequiredWithoutLicense_ownershipNestedInput, {nullable:true})
    @Type(() => licenseUpdateOneRequiredWithoutLicense_ownershipNestedInput)
    license?: licenseUpdateOneRequiredWithoutLicense_ownershipNestedInput;
}

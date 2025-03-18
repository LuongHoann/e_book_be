import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { licenseUpdateOneRequiredWithoutLicense_ownershipNestedInput } from '../license/license-update-one-required-without-license-ownership-nested.input';
import { Type } from 'class-transformer';
import { userUpdateOneRequiredWithoutLicense_ownershipNestedInput } from '../user/user-update-one-required-without-license-ownership-nested.input';

@InputType()
export class license_ownershipUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    download_count?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiration_date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => licenseUpdateOneRequiredWithoutLicense_ownershipNestedInput, {nullable:true})
    @Type(() => licenseUpdateOneRequiredWithoutLicense_ownershipNestedInput)
    license?: licenseUpdateOneRequiredWithoutLicense_ownershipNestedInput;

    @Field(() => userUpdateOneRequiredWithoutLicense_ownershipNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutLicense_ownershipNestedInput;
}

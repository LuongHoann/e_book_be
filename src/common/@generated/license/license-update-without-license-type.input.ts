import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { bookUpdateOneWithoutLicenseNestedInput } from '../book/book-update-one-without-license-nested.input';
import { license_ownershipUpdateManyWithoutLicenseNestedInput } from '../license-ownership/license-ownership-update-many-without-license-nested.input';

@InputType()
export class licenseUpdateWithoutLicense_typeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => bookUpdateOneWithoutLicenseNestedInput, {nullable:true})
    book?: bookUpdateOneWithoutLicenseNestedInput;

    @Field(() => license_ownershipUpdateManyWithoutLicenseNestedInput, {nullable:true})
    license_ownership?: license_ownershipUpdateManyWithoutLicenseNestedInput;
}

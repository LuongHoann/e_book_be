import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { license_ownershipUncheckedUpdateManyWithoutLicenseNestedInput } from '../license-ownership/license-ownership-unchecked-update-many-without-license-nested.input';

@InputType()
export class licenseUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    book_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    license_type_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => license_ownershipUncheckedUpdateManyWithoutLicenseNestedInput, {nullable:true})
    license_ownership?: license_ownershipUncheckedUpdateManyWithoutLicenseNestedInput;
}

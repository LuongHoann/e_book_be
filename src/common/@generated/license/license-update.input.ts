import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { bookUpdateOneWithoutLicenseNestedInput } from '../book/book-update-one-without-license-nested.input';
import { Type } from 'class-transformer';
import { license_typeUpdateOneWithoutLicenseNestedInput } from '../license-type/license-type-update-one-without-license-nested.input';
import { license_ownershipUpdateManyWithoutLicenseNestedInput } from '../license-ownership/license-ownership-update-many-without-license-nested.input';

@InputType()
export class licenseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    license_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => bookUpdateOneWithoutLicenseNestedInput, {nullable:true})
    @Type(() => bookUpdateOneWithoutLicenseNestedInput)
    book?: bookUpdateOneWithoutLicenseNestedInput;

    @Field(() => license_typeUpdateOneWithoutLicenseNestedInput, {nullable:true})
    @Type(() => license_typeUpdateOneWithoutLicenseNestedInput)
    license_type?: license_typeUpdateOneWithoutLicenseNestedInput;

    @Field(() => license_ownershipUpdateManyWithoutLicenseNestedInput, {nullable:true})
    license_ownership?: license_ownershipUpdateManyWithoutLicenseNestedInput;
}

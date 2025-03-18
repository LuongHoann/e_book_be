import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutLicenseInput } from '../book/book-create-nested-one-without-license.input';
import { Type } from 'class-transformer';
import { license_ownershipCreateNestedManyWithoutLicenseInput } from '../license-ownership/license-ownership-create-nested-many-without-license.input';

@InputType()
export class licenseCreateWithoutLicense_typeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    license_name?: string;

    @Field(() => bookCreateNestedOneWithoutLicenseInput, {nullable:true})
    @Type(() => bookCreateNestedOneWithoutLicenseInput)
    book?: bookCreateNestedOneWithoutLicenseInput;

    @Field(() => license_ownershipCreateNestedManyWithoutLicenseInput, {nullable:true})
    license_ownership?: license_ownershipCreateNestedManyWithoutLicenseInput;
}

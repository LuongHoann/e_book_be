import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutLicenseInput } from '../book/book-create-nested-one-without-license.input';
import { license_typeCreateNestedOneWithoutLicenseInput } from '../license-type/license-type-create-nested-one-without-license.input';
import { Type } from 'class-transformer';

@InputType()
export class licenseCreateWithoutLicense_ownershipInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => bookCreateNestedOneWithoutLicenseInput, {nullable:true})
    book?: bookCreateNestedOneWithoutLicenseInput;

    @Field(() => license_typeCreateNestedOneWithoutLicenseInput, {nullable:true})
    @Type(() => license_typeCreateNestedOneWithoutLicenseInput)
    license_type?: license_typeCreateNestedOneWithoutLicenseInput;
}

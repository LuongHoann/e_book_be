import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutLicenseInput } from '../book/book-create-nested-one-without-license.input';
import { Type } from 'class-transformer';
import { license_typeCreateNestedOneWithoutLicenseInput } from '../license-type/license-type-create-nested-one-without-license.input';

@InputType()
export class licenseCreateWithoutLicense_ownershipInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    license_name?: string;

    @Field(() => bookCreateNestedOneWithoutLicenseInput, {nullable:true})
    @Type(() => bookCreateNestedOneWithoutLicenseInput)
    book?: bookCreateNestedOneWithoutLicenseInput;

    @Field(() => license_typeCreateNestedOneWithoutLicenseInput, {nullable:true})
    @Type(() => license_typeCreateNestedOneWithoutLicenseInput)
    license_type?: license_typeCreateNestedOneWithoutLicenseInput;
}

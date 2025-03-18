import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_typeCreateNestedOneWithoutLicenseInput } from '../license-type/license-type-create-nested-one-without-license.input';
import { Type } from 'class-transformer';
import { license_ownershipCreateNestedManyWithoutLicenseInput } from '../license-ownership/license-ownership-create-nested-many-without-license.input';

@InputType()
export class licenseCreateWithoutBookInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    license_name?: string;

    @Field(() => license_typeCreateNestedOneWithoutLicenseInput, {nullable:true})
    @Type(() => license_typeCreateNestedOneWithoutLicenseInput)
    license_type?: license_typeCreateNestedOneWithoutLicenseInput;

    @Field(() => license_ownershipCreateNestedManyWithoutLicenseInput, {nullable:true})
    license_ownership?: license_ownershipCreateNestedManyWithoutLicenseInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_ownershipUncheckedCreateNestedManyWithoutLicenseInput } from '../license-ownership/license-ownership-unchecked-create-nested-many-without-license.input';

@InputType()
export class licenseUncheckedCreateWithoutBookInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    license_type_id?: string;

    @Field(() => license_ownershipUncheckedCreateNestedManyWithoutLicenseInput, {nullable:true})
    license_ownership?: license_ownershipUncheckedCreateNestedManyWithoutLicenseInput;
}

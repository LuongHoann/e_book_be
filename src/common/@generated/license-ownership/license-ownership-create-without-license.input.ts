import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { userCreateNestedOneWithoutLicense_ownershipInput } from '../user/user-create-nested-one-without-license-ownership.input';

@InputType()
export class license_ownershipCreateWithoutLicenseInput {

    @Field(() => Int, {nullable:true})
    download_count?: number;

    @Field(() => Date, {nullable:false})
    expiration_date!: Date | string;

    @Field(() => userCreateNestedOneWithoutLicense_ownershipInput, {nullable:false})
    user!: userCreateNestedOneWithoutLicense_ownershipInput;
}

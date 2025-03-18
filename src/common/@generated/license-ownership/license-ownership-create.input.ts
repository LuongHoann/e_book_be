import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { licenseCreateNestedOneWithoutLicense_ownershipInput } from '../license/license-create-nested-one-without-license-ownership.input';
import { Type } from 'class-transformer';
import { userCreateNestedOneWithoutLicense_ownershipInput } from '../user/user-create-nested-one-without-license-ownership.input';

@InputType()
export class license_ownershipCreateInput {

    @Field(() => Int, {nullable:true})
    download_count?: number;

    @Field(() => Date, {nullable:false})
    expiration_date!: Date | string;

    @Field(() => licenseCreateNestedOneWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => licenseCreateNestedOneWithoutLicense_ownershipInput)
    license!: licenseCreateNestedOneWithoutLicense_ownershipInput;

    @Field(() => userCreateNestedOneWithoutLicense_ownershipInput, {nullable:false})
    user!: userCreateNestedOneWithoutLicense_ownershipInput;
}

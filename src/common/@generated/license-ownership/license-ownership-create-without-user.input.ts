import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { licenseCreateNestedOneWithoutLicense_ownershipInput } from '../license/license-create-nested-one-without-license-ownership.input';
import { Type } from 'class-transformer';

@InputType()
export class license_ownershipCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    download_count?: number;

    @Field(() => Date, {nullable:false})
    expiration_date!: Date | string;

    @Field(() => licenseCreateNestedOneWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => licenseCreateNestedOneWithoutLicense_ownershipInput)
    license!: licenseCreateNestedOneWithoutLicense_ownershipInput;
}

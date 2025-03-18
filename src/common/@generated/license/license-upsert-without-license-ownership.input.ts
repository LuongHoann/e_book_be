import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseUpdateWithoutLicense_ownershipInput } from './license-update-without-license-ownership.input';
import { Type } from 'class-transformer';
import { licenseCreateWithoutLicense_ownershipInput } from './license-create-without-license-ownership.input';
import { licenseWhereInput } from './license-where.input';

@InputType()
export class licenseUpsertWithoutLicense_ownershipInput {

    @Field(() => licenseUpdateWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => licenseUpdateWithoutLicense_ownershipInput)
    update!: licenseUpdateWithoutLicense_ownershipInput;

    @Field(() => licenseCreateWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => licenseCreateWithoutLicense_ownershipInput)
    create!: licenseCreateWithoutLicense_ownershipInput;

    @Field(() => licenseWhereInput, {nullable:true})
    @Type(() => licenseWhereInput)
    where?: licenseWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseWhereInput } from './license-where.input';
import { Type } from 'class-transformer';
import { licenseUpdateWithoutLicense_ownershipInput } from './license-update-without-license-ownership.input';

@InputType()
export class licenseUpdateToOneWithWhereWithoutLicense_ownershipInput {

    @Field(() => licenseWhereInput, {nullable:true})
    @Type(() => licenseWhereInput)
    where?: licenseWhereInput;

    @Field(() => licenseUpdateWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => licenseUpdateWithoutLicense_ownershipInput)
    data!: licenseUpdateWithoutLicense_ownershipInput;
}

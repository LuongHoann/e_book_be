import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { Type } from 'class-transformer';
import { licenseCreateWithoutLicense_ownershipInput } from './license-create-without-license-ownership.input';

@InputType()
export class licenseCreateOrConnectWithoutLicense_ownershipInput {

    @Field(() => licenseWhereUniqueInput, {nullable:false})
    @Type(() => licenseWhereUniqueInput)
    where!: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;

    @Field(() => licenseCreateWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => licenseCreateWithoutLicense_ownershipInput)
    create!: licenseCreateWithoutLicense_ownershipInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseCreateWithoutLicense_ownershipInput } from './license-create-without-license-ownership.input';
import { Type } from 'class-transformer';
import { licenseCreateOrConnectWithoutLicense_ownershipInput } from './license-create-or-connect-without-license-ownership.input';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';

@InputType()
export class licenseCreateNestedOneWithoutLicense_ownershipInput {

    @Field(() => licenseCreateWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => licenseCreateWithoutLicense_ownershipInput)
    create?: licenseCreateWithoutLicense_ownershipInput;

    @Field(() => licenseCreateOrConnectWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => licenseCreateOrConnectWithoutLicense_ownershipInput)
    connectOrCreate?: licenseCreateOrConnectWithoutLicense_ownershipInput;

    @Field(() => licenseWhereUniqueInput, {nullable:true})
    @Type(() => licenseWhereUniqueInput)
    connect?: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;
}

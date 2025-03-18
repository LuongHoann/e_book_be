import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_ownershipCreateWithoutLicenseInput } from './license-ownership-create-without-license.input';
import { Type } from 'class-transformer';
import { license_ownershipCreateOrConnectWithoutLicenseInput } from './license-ownership-create-or-connect-without-license.input';
import { license_ownershipCreateManyLicenseInputEnvelope } from './license-ownership-create-many-license-input-envelope.input';
import { Prisma } from '@prisma/client';
import { license_ownershipWhereUniqueInput } from './license-ownership-where-unique.input';

@InputType()
export class license_ownershipUncheckedCreateNestedManyWithoutLicenseInput {

    @Field(() => [license_ownershipCreateWithoutLicenseInput], {nullable:true})
    @Type(() => license_ownershipCreateWithoutLicenseInput)
    create?: Array<license_ownershipCreateWithoutLicenseInput>;

    @Field(() => [license_ownershipCreateOrConnectWithoutLicenseInput], {nullable:true})
    @Type(() => license_ownershipCreateOrConnectWithoutLicenseInput)
    connectOrCreate?: Array<license_ownershipCreateOrConnectWithoutLicenseInput>;

    @Field(() => license_ownershipCreateManyLicenseInputEnvelope, {nullable:true})
    @Type(() => license_ownershipCreateManyLicenseInputEnvelope)
    createMany?: license_ownershipCreateManyLicenseInputEnvelope;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;
}

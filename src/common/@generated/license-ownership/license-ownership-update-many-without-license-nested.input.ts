import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_ownershipCreateWithoutLicenseInput } from './license-ownership-create-without-license.input';
import { Type } from 'class-transformer';
import { license_ownershipCreateOrConnectWithoutLicenseInput } from './license-ownership-create-or-connect-without-license.input';
import { license_ownershipUpsertWithWhereUniqueWithoutLicenseInput } from './license-ownership-upsert-with-where-unique-without-license.input';
import { license_ownershipCreateManyLicenseInputEnvelope } from './license-ownership-create-many-license-input-envelope.input';
import { Prisma } from '@prisma/client';
import { license_ownershipWhereUniqueInput } from './license-ownership-where-unique.input';
import { license_ownershipUpdateWithWhereUniqueWithoutLicenseInput } from './license-ownership-update-with-where-unique-without-license.input';
import { license_ownershipUpdateManyWithWhereWithoutLicenseInput } from './license-ownership-update-many-with-where-without-license.input';
import { license_ownershipScalarWhereInput } from './license-ownership-scalar-where.input';

@InputType()
export class license_ownershipUpdateManyWithoutLicenseNestedInput {

    @Field(() => [license_ownershipCreateWithoutLicenseInput], {nullable:true})
    @Type(() => license_ownershipCreateWithoutLicenseInput)
    create?: Array<license_ownershipCreateWithoutLicenseInput>;

    @Field(() => [license_ownershipCreateOrConnectWithoutLicenseInput], {nullable:true})
    @Type(() => license_ownershipCreateOrConnectWithoutLicenseInput)
    connectOrCreate?: Array<license_ownershipCreateOrConnectWithoutLicenseInput>;

    @Field(() => [license_ownershipUpsertWithWhereUniqueWithoutLicenseInput], {nullable:true})
    @Type(() => license_ownershipUpsertWithWhereUniqueWithoutLicenseInput)
    upsert?: Array<license_ownershipUpsertWithWhereUniqueWithoutLicenseInput>;

    @Field(() => license_ownershipCreateManyLicenseInputEnvelope, {nullable:true})
    @Type(() => license_ownershipCreateManyLicenseInputEnvelope)
    createMany?: license_ownershipCreateManyLicenseInputEnvelope;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    set?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;

    @Field(() => [license_ownershipUpdateWithWhereUniqueWithoutLicenseInput], {nullable:true})
    @Type(() => license_ownershipUpdateWithWhereUniqueWithoutLicenseInput)
    update?: Array<license_ownershipUpdateWithWhereUniqueWithoutLicenseInput>;

    @Field(() => [license_ownershipUpdateManyWithWhereWithoutLicenseInput], {nullable:true})
    @Type(() => license_ownershipUpdateManyWithWhereWithoutLicenseInput)
    updateMany?: Array<license_ownershipUpdateManyWithWhereWithoutLicenseInput>;

    @Field(() => [license_ownershipScalarWhereInput], {nullable:true})
    @Type(() => license_ownershipScalarWhereInput)
    deleteMany?: Array<license_ownershipScalarWhereInput>;
}

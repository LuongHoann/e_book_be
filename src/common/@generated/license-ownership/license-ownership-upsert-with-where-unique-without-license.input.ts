import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { license_ownershipWhereUniqueInput } from './license-ownership-where-unique.input';
import { Type } from 'class-transformer';
import { license_ownershipUpdateWithoutLicenseInput } from './license-ownership-update-without-license.input';
import { license_ownershipCreateWithoutLicenseInput } from './license-ownership-create-without-license.input';

@InputType()
export class license_ownershipUpsertWithWhereUniqueWithoutLicenseInput {

    @Field(() => license_ownershipWhereUniqueInput, {nullable:false})
    @Type(() => license_ownershipWhereUniqueInput)
    where!: Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>;

    @Field(() => license_ownershipUpdateWithoutLicenseInput, {nullable:false})
    @Type(() => license_ownershipUpdateWithoutLicenseInput)
    update!: license_ownershipUpdateWithoutLicenseInput;

    @Field(() => license_ownershipCreateWithoutLicenseInput, {nullable:false})
    @Type(() => license_ownershipCreateWithoutLicenseInput)
    create!: license_ownershipCreateWithoutLicenseInput;
}

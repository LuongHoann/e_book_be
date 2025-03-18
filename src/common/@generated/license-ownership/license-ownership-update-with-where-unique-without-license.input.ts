import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { license_ownershipWhereUniqueInput } from './license-ownership-where-unique.input';
import { Type } from 'class-transformer';
import { license_ownershipUpdateWithoutLicenseInput } from './license-ownership-update-without-license.input';

@InputType()
export class license_ownershipUpdateWithWhereUniqueWithoutLicenseInput {

    @Field(() => license_ownershipWhereUniqueInput, {nullable:false})
    @Type(() => license_ownershipWhereUniqueInput)
    where!: Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>;

    @Field(() => license_ownershipUpdateWithoutLicenseInput, {nullable:false})
    @Type(() => license_ownershipUpdateWithoutLicenseInput)
    data!: license_ownershipUpdateWithoutLicenseInput;
}

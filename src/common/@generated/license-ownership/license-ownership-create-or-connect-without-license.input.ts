import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { license_ownershipWhereUniqueInput } from './license-ownership-where-unique.input';
import { Type } from 'class-transformer';
import { license_ownershipCreateWithoutLicenseInput } from './license-ownership-create-without-license.input';

@InputType()
export class license_ownershipCreateOrConnectWithoutLicenseInput {

    @Field(() => license_ownershipWhereUniqueInput, {nullable:false})
    @Type(() => license_ownershipWhereUniqueInput)
    where!: Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>;

    @Field(() => license_ownershipCreateWithoutLicenseInput, {nullable:false})
    @Type(() => license_ownershipCreateWithoutLicenseInput)
    create!: license_ownershipCreateWithoutLicenseInput;
}

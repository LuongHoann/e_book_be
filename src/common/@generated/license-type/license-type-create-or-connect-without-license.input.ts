import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { license_typeWhereUniqueInput } from './license-type-where-unique.input';
import { Type } from 'class-transformer';
import { license_typeCreateWithoutLicenseInput } from './license-type-create-without-license.input';

@InputType()
export class license_typeCreateOrConnectWithoutLicenseInput {

    @Field(() => license_typeWhereUniqueInput, {nullable:false})
    @Type(() => license_typeWhereUniqueInput)
    where!: Prisma.AtLeast<license_typeWhereUniqueInput, 'id'>;

    @Field(() => license_typeCreateWithoutLicenseInput, {nullable:false})
    @Type(() => license_typeCreateWithoutLicenseInput)
    create!: license_typeCreateWithoutLicenseInput;
}

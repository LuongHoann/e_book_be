import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_typeCreateWithoutLicenseInput } from './license-type-create-without-license.input';
import { Type } from 'class-transformer';
import { license_typeCreateOrConnectWithoutLicenseInput } from './license-type-create-or-connect-without-license.input';
import { Prisma } from '@prisma/client';
import { license_typeWhereUniqueInput } from './license-type-where-unique.input';

@InputType()
export class license_typeCreateNestedOneWithoutLicenseInput {

    @Field(() => license_typeCreateWithoutLicenseInput, {nullable:true})
    @Type(() => license_typeCreateWithoutLicenseInput)
    create?: license_typeCreateWithoutLicenseInput;

    @Field(() => license_typeCreateOrConnectWithoutLicenseInput, {nullable:true})
    @Type(() => license_typeCreateOrConnectWithoutLicenseInput)
    connectOrCreate?: license_typeCreateOrConnectWithoutLicenseInput;

    @Field(() => license_typeWhereUniqueInput, {nullable:true})
    @Type(() => license_typeWhereUniqueInput)
    connect?: Prisma.AtLeast<license_typeWhereUniqueInput, 'id'>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_typeUpdateWithoutLicenseInput } from './license-type-update-without-license.input';
import { Type } from 'class-transformer';
import { license_typeCreateWithoutLicenseInput } from './license-type-create-without-license.input';
import { license_typeWhereInput } from './license-type-where.input';

@InputType()
export class license_typeUpsertWithoutLicenseInput {

    @Field(() => license_typeUpdateWithoutLicenseInput, {nullable:false})
    @Type(() => license_typeUpdateWithoutLicenseInput)
    update!: license_typeUpdateWithoutLicenseInput;

    @Field(() => license_typeCreateWithoutLicenseInput, {nullable:false})
    @Type(() => license_typeCreateWithoutLicenseInput)
    create!: license_typeCreateWithoutLicenseInput;

    @Field(() => license_typeWhereInput, {nullable:true})
    @Type(() => license_typeWhereInput)
    where?: license_typeWhereInput;
}

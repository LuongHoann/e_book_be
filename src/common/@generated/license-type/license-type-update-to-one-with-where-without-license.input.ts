import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_typeWhereInput } from './license-type-where.input';
import { Type } from 'class-transformer';
import { license_typeUpdateWithoutLicenseInput } from './license-type-update-without-license.input';

@InputType()
export class license_typeUpdateToOneWithWhereWithoutLicenseInput {

    @Field(() => license_typeWhereInput, {nullable:true})
    @Type(() => license_typeWhereInput)
    where?: license_typeWhereInput;

    @Field(() => license_typeUpdateWithoutLicenseInput, {nullable:false})
    @Type(() => license_typeUpdateWithoutLicenseInput)
    data!: license_typeUpdateWithoutLicenseInput;
}

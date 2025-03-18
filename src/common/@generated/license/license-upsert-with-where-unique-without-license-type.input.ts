import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { Type } from 'class-transformer';
import { licenseUpdateWithoutLicense_typeInput } from './license-update-without-license-type.input';
import { licenseCreateWithoutLicense_typeInput } from './license-create-without-license-type.input';

@InputType()
export class licenseUpsertWithWhereUniqueWithoutLicense_typeInput {

    @Field(() => licenseWhereUniqueInput, {nullable:false})
    @Type(() => licenseWhereUniqueInput)
    where!: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;

    @Field(() => licenseUpdateWithoutLicense_typeInput, {nullable:false})
    @Type(() => licenseUpdateWithoutLicense_typeInput)
    update!: licenseUpdateWithoutLicense_typeInput;

    @Field(() => licenseCreateWithoutLicense_typeInput, {nullable:false})
    @Type(() => licenseCreateWithoutLicense_typeInput)
    create!: licenseCreateWithoutLicense_typeInput;
}

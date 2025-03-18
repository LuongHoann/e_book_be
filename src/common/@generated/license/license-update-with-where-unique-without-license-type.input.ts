import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { Type } from 'class-transformer';
import { licenseUpdateWithoutLicense_typeInput } from './license-update-without-license-type.input';

@InputType()
export class licenseUpdateWithWhereUniqueWithoutLicense_typeInput {

    @Field(() => licenseWhereUniqueInput, {nullable:false})
    @Type(() => licenseWhereUniqueInput)
    where!: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;

    @Field(() => licenseUpdateWithoutLicense_typeInput, {nullable:false})
    @Type(() => licenseUpdateWithoutLicense_typeInput)
    data!: licenseUpdateWithoutLicense_typeInput;
}

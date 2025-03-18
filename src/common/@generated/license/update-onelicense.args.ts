import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { licenseUpdateInput } from './license-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';

@ArgsType()
export class UpdateOnelicenseArgs {

    @Field(() => licenseUpdateInput, {nullable:false})
    @Type(() => licenseUpdateInput)
    data!: licenseUpdateInput;

    @Field(() => licenseWhereUniqueInput, {nullable:false})
    @Type(() => licenseWhereUniqueInput)
    where!: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;
}

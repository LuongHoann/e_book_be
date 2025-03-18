import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { Type } from 'class-transformer';
import { licenseCreateInput } from './license-create.input';
import { licenseUpdateInput } from './license-update.input';

@ArgsType()
export class UpsertOnelicenseArgs {

    @Field(() => licenseWhereUniqueInput, {nullable:false})
    @Type(() => licenseWhereUniqueInput)
    where!: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;

    @Field(() => licenseCreateInput, {nullable:false})
    @Type(() => licenseCreateInput)
    create!: licenseCreateInput;

    @Field(() => licenseUpdateInput, {nullable:false})
    @Type(() => licenseUpdateInput)
    update!: licenseUpdateInput;
}

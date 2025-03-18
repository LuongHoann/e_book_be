import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { licenseWhereInput } from './license-where.input';
import { Type } from 'class-transformer';
import { licenseOrderByWithRelationInput } from './license-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LicenseScalarFieldEnum } from '../prisma/license-scalar-field.enum';

@ArgsType()
export class FindFirstlicenseArgs {

    @Field(() => licenseWhereInput, {nullable:true})
    @Type(() => licenseWhereInput)
    where?: licenseWhereInput;

    @Field(() => [licenseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<licenseOrderByWithRelationInput>;

    @Field(() => licenseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LicenseScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LicenseScalarFieldEnum}`>;
}

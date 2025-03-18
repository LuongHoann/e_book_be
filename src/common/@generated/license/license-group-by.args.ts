import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { licenseWhereInput } from './license-where.input';
import { Type } from 'class-transformer';
import { licenseOrderByWithAggregationInput } from './license-order-by-with-aggregation.input';
import { LicenseScalarFieldEnum } from '../prisma/license-scalar-field.enum';
import { licenseScalarWhereWithAggregatesInput } from './license-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class licenseGroupByArgs {

    @Field(() => licenseWhereInput, {nullable:true})
    @Type(() => licenseWhereInput)
    where?: licenseWhereInput;

    @Field(() => [licenseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<licenseOrderByWithAggregationInput>;

    @Field(() => [LicenseScalarFieldEnum], {nullable:false})
    by!: Array<`${LicenseScalarFieldEnum}`>;

    @Field(() => licenseScalarWhereWithAggregatesInput, {nullable:true})
    having?: licenseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

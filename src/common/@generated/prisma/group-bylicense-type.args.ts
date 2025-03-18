import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_typeWhereInput } from '../license-type/license-type-where.input';
import { Type } from 'class-transformer';
import { license_typeOrderByWithAggregationInput } from '../license-type/license-type-order-by-with-aggregation.input';
import { License_typeScalarFieldEnum } from './license-type-scalar-field.enum';
import { license_typeScalarWhereWithAggregatesInput } from '../license-type/license-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBylicenseTypeArgs {

    @Field(() => license_typeWhereInput, {nullable:true})
    @Type(() => license_typeWhereInput)
    where?: license_typeWhereInput;

    @Field(() => [license_typeOrderByWithAggregationInput], {nullable:true})
    @Type(() => license_typeOrderByWithAggregationInput)
    orderBy?: Array<license_typeOrderByWithAggregationInput>;

    @Field(() => [License_typeScalarFieldEnum], {nullable:false})
    by!: Array<`${License_typeScalarFieldEnum}`>;

    @Field(() => license_typeScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => license_typeScalarWhereWithAggregatesInput)
    having?: license_typeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

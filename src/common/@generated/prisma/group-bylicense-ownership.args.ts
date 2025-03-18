import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_ownershipWhereInput } from '../license-ownership/license-ownership-where.input';
import { Type } from 'class-transformer';
import { license_ownershipOrderByWithAggregationInput } from '../license-ownership/license-ownership-order-by-with-aggregation.input';
import { License_ownershipScalarFieldEnum } from './license-ownership-scalar-field.enum';
import { license_ownershipScalarWhereWithAggregatesInput } from '../license-ownership/license-ownership-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBylicenseOwnershipArgs {

    @Field(() => license_ownershipWhereInput, {nullable:true})
    @Type(() => license_ownershipWhereInput)
    where?: license_ownershipWhereInput;

    @Field(() => [license_ownershipOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<license_ownershipOrderByWithAggregationInput>;

    @Field(() => [License_ownershipScalarFieldEnum], {nullable:false})
    by!: Array<`${License_ownershipScalarFieldEnum}`>;

    @Field(() => license_ownershipScalarWhereWithAggregatesInput, {nullable:true})
    having?: license_ownershipScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

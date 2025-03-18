import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { categoryOrderByWithAggregationInput } from './category-order-by-with-aggregation.input';
import { CategoryScalarFieldEnum } from '../prisma/category-scalar-field.enum';
import { categoryScalarWhereWithAggregatesInput } from './category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class categoryGroupByArgs {

    @Field(() => categoryWhereInput, {nullable:true})
    @Type(() => categoryWhereInput)
    where?: categoryWhereInput;

    @Field(() => [categoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<categoryOrderByWithAggregationInput>;

    @Field(() => [CategoryScalarFieldEnum], {nullable:false})
    by!: Array<`${CategoryScalarFieldEnum}`>;

    @Field(() => categoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: categoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

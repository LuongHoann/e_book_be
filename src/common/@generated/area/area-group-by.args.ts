import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areaWhereInput } from './area-where.input';
import { Type } from 'class-transformer';
import { areaOrderByWithAggregationInput } from './area-order-by-with-aggregation.input';
import { AreaScalarFieldEnum } from '../prisma/area-scalar-field.enum';
import { areaScalarWhereWithAggregatesInput } from './area-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class areaGroupByArgs {

    @Field(() => areaWhereInput, {nullable:true})
    @Type(() => areaWhereInput)
    where?: areaWhereInput;

    @Field(() => [areaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<areaOrderByWithAggregationInput>;

    @Field(() => [AreaScalarFieldEnum], {nullable:false})
    by!: Array<`${AreaScalarFieldEnum}`>;

    @Field(() => areaScalarWhereWithAggregatesInput, {nullable:true})
    having?: areaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

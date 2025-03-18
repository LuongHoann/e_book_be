import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { newsWhereInput } from './news-where.input';
import { Type } from 'class-transformer';
import { newsOrderByWithAggregationInput } from './news-order-by-with-aggregation.input';
import { NewsScalarFieldEnum } from '../prisma/news-scalar-field.enum';
import { newsScalarWhereWithAggregatesInput } from './news-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class newsGroupByArgs {

    @Field(() => newsWhereInput, {nullable:true})
    @Type(() => newsWhereInput)
    where?: newsWhereInput;

    @Field(() => [newsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<newsOrderByWithAggregationInput>;

    @Field(() => [NewsScalarFieldEnum], {nullable:false})
    by!: Array<`${NewsScalarFieldEnum}`>;

    @Field(() => newsScalarWhereWithAggregatesInput, {nullable:true})
    having?: newsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

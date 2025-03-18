import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reading_historyWhereInput } from '../reading-history/reading-history-where.input';
import { Type } from 'class-transformer';
import { reading_historyOrderByWithAggregationInput } from '../reading-history/reading-history-order-by-with-aggregation.input';
import { Reading_historyScalarFieldEnum } from './reading-history-scalar-field.enum';
import { reading_historyScalarWhereWithAggregatesInput } from '../reading-history/reading-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByreadingHistoryArgs {

    @Field(() => reading_historyWhereInput, {nullable:true})
    @Type(() => reading_historyWhereInput)
    where?: reading_historyWhereInput;

    @Field(() => [reading_historyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<reading_historyOrderByWithAggregationInput>;

    @Field(() => [Reading_historyScalarFieldEnum], {nullable:false})
    by!: Array<`${Reading_historyScalarFieldEnum}`>;

    @Field(() => reading_historyScalarWhereWithAggregatesInput, {nullable:true})
    having?: reading_historyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

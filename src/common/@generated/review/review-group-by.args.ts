import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { reviewOrderByWithAggregationInput } from './review-order-by-with-aggregation.input';
import { ReviewScalarFieldEnum } from '../prisma/review-scalar-field.enum';
import { reviewScalarWhereWithAggregatesInput } from './review-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class reviewGroupByArgs {

    @Field(() => reviewWhereInput, {nullable:true})
    @Type(() => reviewWhereInput)
    where?: reviewWhereInput;

    @Field(() => [reviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<reviewOrderByWithAggregationInput>;

    @Field(() => [ReviewScalarFieldEnum], {nullable:false})
    by!: Array<`${ReviewScalarFieldEnum}`>;

    @Field(() => reviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: reviewScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

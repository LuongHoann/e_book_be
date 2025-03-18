import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { commentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { commentOrderByWithAggregationInput } from './comment-order-by-with-aggregation.input';
import { CommentScalarFieldEnum } from '../prisma/comment-scalar-field.enum';
import { commentScalarWhereWithAggregatesInput } from './comment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class commentGroupByArgs {

    @Field(() => commentWhereInput, {nullable:true})
    @Type(() => commentWhereInput)
    where?: commentWhereInput;

    @Field(() => [commentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<commentOrderByWithAggregationInput>;

    @Field(() => [CommentScalarFieldEnum], {nullable:false})
    by!: Array<`${CommentScalarFieldEnum}`>;

    @Field(() => commentScalarWhereWithAggregatesInput, {nullable:true})
    having?: commentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

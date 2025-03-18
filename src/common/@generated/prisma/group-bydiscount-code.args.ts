import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { discount_codeWhereInput } from '../discount-code/discount-code-where.input';
import { Type } from 'class-transformer';
import { discount_codeOrderByWithAggregationInput } from '../discount-code/discount-code-order-by-with-aggregation.input';
import { Discount_codeScalarFieldEnum } from './discount-code-scalar-field.enum';
import { discount_codeScalarWhereWithAggregatesInput } from '../discount-code/discount-code-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydiscountCodeArgs {

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    where?: discount_codeWhereInput;

    @Field(() => [discount_codeOrderByWithAggregationInput], {nullable:true})
    @Type(() => discount_codeOrderByWithAggregationInput)
    orderBy?: Array<discount_codeOrderByWithAggregationInput>;

    @Field(() => [Discount_codeScalarFieldEnum], {nullable:false})
    by!: Array<`${Discount_codeScalarFieldEnum}`>;

    @Field(() => discount_codeScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => discount_codeScalarWhereWithAggregatesInput)
    having?: discount_codeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

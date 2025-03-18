import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { discount_codeCountOrderByAggregateInput } from './discount-code-count-order-by-aggregate.input';
import { discount_codeAvgOrderByAggregateInput } from './discount-code-avg-order-by-aggregate.input';
import { discount_codeMaxOrderByAggregateInput } from './discount-code-max-order-by-aggregate.input';
import { discount_codeMinOrderByAggregateInput } from './discount-code-min-order-by-aggregate.input';
import { discount_codeSumOrderByAggregateInput } from './discount-code-sum-order-by-aggregate.input';

@InputType()
export class discount_codeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    discount_code_name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    discount_value?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    discount_value_percent?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    area_name?: SortOrderInput;

    @Field(() => discount_codeCountOrderByAggregateInput, {nullable:true})
    @Type(() => discount_codeCountOrderByAggregateInput)
    _count?: discount_codeCountOrderByAggregateInput;

    @Field(() => discount_codeAvgOrderByAggregateInput, {nullable:true})
    @Type(() => discount_codeAvgOrderByAggregateInput)
    _avg?: discount_codeAvgOrderByAggregateInput;

    @Field(() => discount_codeMaxOrderByAggregateInput, {nullable:true})
    @Type(() => discount_codeMaxOrderByAggregateInput)
    _max?: discount_codeMaxOrderByAggregateInput;

    @Field(() => discount_codeMinOrderByAggregateInput, {nullable:true})
    @Type(() => discount_codeMinOrderByAggregateInput)
    _min?: discount_codeMinOrderByAggregateInput;

    @Field(() => discount_codeSumOrderByAggregateInput, {nullable:true})
    @Type(() => discount_codeSumOrderByAggregateInput)
    _sum?: discount_codeSumOrderByAggregateInput;
}

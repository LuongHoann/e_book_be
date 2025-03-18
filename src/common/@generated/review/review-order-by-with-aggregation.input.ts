import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { reviewCountOrderByAggregateInput } from './review-count-order-by-aggregate.input';
import { reviewAvgOrderByAggregateInput } from './review-avg-order-by-aggregate.input';
import { reviewMaxOrderByAggregateInput } from './review-max-order-by-aggregate.input';
import { reviewMinOrderByAggregateInput } from './review-min-order-by-aggregate.input';
import { reviewSumOrderByAggregateInput } from './review-sum-order-by-aggregate.input';

@InputType()
export class reviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;

    @Field(() => reviewCountOrderByAggregateInput, {nullable:true})
    _count?: reviewCountOrderByAggregateInput;

    @Field(() => reviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: reviewAvgOrderByAggregateInput;

    @Field(() => reviewMaxOrderByAggregateInput, {nullable:true})
    _max?: reviewMaxOrderByAggregateInput;

    @Field(() => reviewMinOrderByAggregateInput, {nullable:true})
    _min?: reviewMinOrderByAggregateInput;

    @Field(() => reviewSumOrderByAggregateInput, {nullable:true})
    _sum?: reviewSumOrderByAggregateInput;
}

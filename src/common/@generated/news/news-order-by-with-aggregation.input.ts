import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { newsCountOrderByAggregateInput } from './news-count-order-by-aggregate.input';
import { newsAvgOrderByAggregateInput } from './news-avg-order-by-aggregate.input';
import { newsMaxOrderByAggregateInput } from './news-max-order-by-aggregate.input';
import { newsMinOrderByAggregateInput } from './news-min-order-by-aggregate.input';
import { newsSumOrderByAggregateInput } from './news-sum-order-by-aggregate.input';

@InputType()
export class newsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    publish_date?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => newsCountOrderByAggregateInput, {nullable:true})
    _count?: newsCountOrderByAggregateInput;

    @Field(() => newsAvgOrderByAggregateInput, {nullable:true})
    _avg?: newsAvgOrderByAggregateInput;

    @Field(() => newsMaxOrderByAggregateInput, {nullable:true})
    _max?: newsMaxOrderByAggregateInput;

    @Field(() => newsMinOrderByAggregateInput, {nullable:true})
    _min?: newsMinOrderByAggregateInput;

    @Field(() => newsSumOrderByAggregateInput, {nullable:true})
    _sum?: newsSumOrderByAggregateInput;
}

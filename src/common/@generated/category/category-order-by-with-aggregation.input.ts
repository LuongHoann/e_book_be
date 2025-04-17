import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { categoryCountOrderByAggregateInput } from './category-count-order-by-aggregate.input';
import { categoryAvgOrderByAggregateInput } from './category-avg-order-by-aggregate.input';
import { categoryMaxOrderByAggregateInput } from './category-max-order-by-aggregate.input';
import { categoryMinOrderByAggregateInput } from './category-min-order-by-aggregate.input';
import { categorySumOrderByAggregateInput } from './category-sum-order-by-aggregate.input';

@InputType()
export class categoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => categoryCountOrderByAggregateInput, {nullable:true})
    _count?: categoryCountOrderByAggregateInput;

    @Field(() => categoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: categoryAvgOrderByAggregateInput;

    @Field(() => categoryMaxOrderByAggregateInput, {nullable:true})
    _max?: categoryMaxOrderByAggregateInput;

    @Field(() => categoryMinOrderByAggregateInput, {nullable:true})
    _min?: categoryMinOrderByAggregateInput;

    @Field(() => categorySumOrderByAggregateInput, {nullable:true})
    _sum?: categorySumOrderByAggregateInput;
}

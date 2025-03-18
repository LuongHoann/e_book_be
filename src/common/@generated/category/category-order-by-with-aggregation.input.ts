import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { categoryCountOrderByAggregateInput } from './category-count-order-by-aggregate.input';
import { categoryMaxOrderByAggregateInput } from './category-max-order-by-aggregate.input';
import { categoryMinOrderByAggregateInput } from './category-min-order-by-aggregate.input';

@InputType()
export class categoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => categoryCountOrderByAggregateInput, {nullable:true})
    _count?: categoryCountOrderByAggregateInput;

    @Field(() => categoryMaxOrderByAggregateInput, {nullable:true})
    _max?: categoryMaxOrderByAggregateInput;

    @Field(() => categoryMinOrderByAggregateInput, {nullable:true})
    _min?: categoryMinOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { roleCountOrderByAggregateInput } from './role-count-order-by-aggregate.input';
import { roleAvgOrderByAggregateInput } from './role-avg-order-by-aggregate.input';
import { roleMaxOrderByAggregateInput } from './role-max-order-by-aggregate.input';
import { roleMinOrderByAggregateInput } from './role-min-order-by-aggregate.input';
import { roleSumOrderByAggregateInput } from './role-sum-order-by-aggregate.input';

@InputType()
export class roleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role_name?: `${SortOrder}`;

    @Field(() => roleCountOrderByAggregateInput, {nullable:true})
    _count?: roleCountOrderByAggregateInput;

    @Field(() => roleAvgOrderByAggregateInput, {nullable:true})
    _avg?: roleAvgOrderByAggregateInput;

    @Field(() => roleMaxOrderByAggregateInput, {nullable:true})
    _max?: roleMaxOrderByAggregateInput;

    @Field(() => roleMinOrderByAggregateInput, {nullable:true})
    _min?: roleMinOrderByAggregateInput;

    @Field(() => roleSumOrderByAggregateInput, {nullable:true})
    _sum?: roleSumOrderByAggregateInput;
}

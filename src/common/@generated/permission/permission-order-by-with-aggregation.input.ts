import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { permissionCountOrderByAggregateInput } from './permission-count-order-by-aggregate.input';
import { permissionAvgOrderByAggregateInput } from './permission-avg-order-by-aggregate.input';
import { permissionMaxOrderByAggregateInput } from './permission-max-order-by-aggregate.input';
import { permissionMinOrderByAggregateInput } from './permission-min-order-by-aggregate.input';
import { permissionSumOrderByAggregateInput } from './permission-sum-order-by-aggregate.input';

@InputType()
export class permissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    role_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => permissionCountOrderByAggregateInput, {nullable:true})
    _count?: permissionCountOrderByAggregateInput;

    @Field(() => permissionAvgOrderByAggregateInput, {nullable:true})
    _avg?: permissionAvgOrderByAggregateInput;

    @Field(() => permissionMaxOrderByAggregateInput, {nullable:true})
    _max?: permissionMaxOrderByAggregateInput;

    @Field(() => permissionMinOrderByAggregateInput, {nullable:true})
    _min?: permissionMinOrderByAggregateInput;

    @Field(() => permissionSumOrderByAggregateInput, {nullable:true})
    _sum?: permissionSumOrderByAggregateInput;
}

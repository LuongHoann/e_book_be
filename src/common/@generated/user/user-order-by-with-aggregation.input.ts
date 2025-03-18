import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { userCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { userAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { userMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { userMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { userSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

@InputType()
export class userOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    avatar?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expired_code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    account_status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;

    @Field(() => userCountOrderByAggregateInput, {nullable:true})
    _count?: userCountOrderByAggregateInput;

    @Field(() => userAvgOrderByAggregateInput, {nullable:true})
    _avg?: userAvgOrderByAggregateInput;

    @Field(() => userMaxOrderByAggregateInput, {nullable:true})
    _max?: userMaxOrderByAggregateInput;

    @Field(() => userMinOrderByAggregateInput, {nullable:true})
    _min?: userMinOrderByAggregateInput;

    @Field(() => userSumOrderByAggregateInput, {nullable:true})
    _sum?: userSumOrderByAggregateInput;
}

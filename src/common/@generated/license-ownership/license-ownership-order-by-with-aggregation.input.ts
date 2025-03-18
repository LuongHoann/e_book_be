import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { license_ownershipCountOrderByAggregateInput } from './license-ownership-count-order-by-aggregate.input';
import { license_ownershipAvgOrderByAggregateInput } from './license-ownership-avg-order-by-aggregate.input';
import { license_ownershipMaxOrderByAggregateInput } from './license-ownership-max-order-by-aggregate.input';
import { license_ownershipMinOrderByAggregateInput } from './license-ownership-min-order-by-aggregate.input';
import { license_ownershipSumOrderByAggregateInput } from './license-ownership-sum-order-by-aggregate.input';

@InputType()
export class license_ownershipOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    license_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    download_count?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    expiration_date?: `${SortOrder}`;

    @Field(() => license_ownershipCountOrderByAggregateInput, {nullable:true})
    _count?: license_ownershipCountOrderByAggregateInput;

    @Field(() => license_ownershipAvgOrderByAggregateInput, {nullable:true})
    _avg?: license_ownershipAvgOrderByAggregateInput;

    @Field(() => license_ownershipMaxOrderByAggregateInput, {nullable:true})
    _max?: license_ownershipMaxOrderByAggregateInput;

    @Field(() => license_ownershipMinOrderByAggregateInput, {nullable:true})
    _min?: license_ownershipMinOrderByAggregateInput;

    @Field(() => license_ownershipSumOrderByAggregateInput, {nullable:true})
    _sum?: license_ownershipSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { license_typeCountOrderByAggregateInput } from './license-type-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { license_typeAvgOrderByAggregateInput } from './license-type-avg-order-by-aggregate.input';
import { license_typeMaxOrderByAggregateInput } from './license-type-max-order-by-aggregate.input';
import { license_typeMinOrderByAggregateInput } from './license-type-min-order-by-aggregate.input';
import { license_typeSumOrderByAggregateInput } from './license-type-sum-order-by-aggregate.input';

@InputType()
export class license_typeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    download_count?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    duration?: SortOrderInput;

    @Field(() => license_typeCountOrderByAggregateInput, {nullable:true})
    @Type(() => license_typeCountOrderByAggregateInput)
    _count?: license_typeCountOrderByAggregateInput;

    @Field(() => license_typeAvgOrderByAggregateInput, {nullable:true})
    @Type(() => license_typeAvgOrderByAggregateInput)
    _avg?: license_typeAvgOrderByAggregateInput;

    @Field(() => license_typeMaxOrderByAggregateInput, {nullable:true})
    @Type(() => license_typeMaxOrderByAggregateInput)
    _max?: license_typeMaxOrderByAggregateInput;

    @Field(() => license_typeMinOrderByAggregateInput, {nullable:true})
    @Type(() => license_typeMinOrderByAggregateInput)
    _min?: license_typeMinOrderByAggregateInput;

    @Field(() => license_typeSumOrderByAggregateInput, {nullable:true})
    @Type(() => license_typeSumOrderByAggregateInput)
    _sum?: license_typeSumOrderByAggregateInput;
}

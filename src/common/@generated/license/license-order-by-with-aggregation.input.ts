import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { licenseCountOrderByAggregateInput } from './license-count-order-by-aggregate.input';
import { licenseMaxOrderByAggregateInput } from './license-max-order-by-aggregate.input';
import { licenseMinOrderByAggregateInput } from './license-min-order-by-aggregate.input';

@InputType()
export class licenseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    license_name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    book_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    license_type_id?: SortOrderInput;

    @Field(() => licenseCountOrderByAggregateInput, {nullable:true})
    _count?: licenseCountOrderByAggregateInput;

    @Field(() => licenseMaxOrderByAggregateInput, {nullable:true})
    _max?: licenseMaxOrderByAggregateInput;

    @Field(() => licenseMinOrderByAggregateInput, {nullable:true})
    _min?: licenseMinOrderByAggregateInput;
}

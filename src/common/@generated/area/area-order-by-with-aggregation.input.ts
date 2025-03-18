import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { areaCountOrderByAggregateInput } from './area-count-order-by-aggregate.input';
import { areaMaxOrderByAggregateInput } from './area-max-order-by-aggregate.input';
import { areaMinOrderByAggregateInput } from './area-min-order-by-aggregate.input';

@InputType()
export class areaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    area_name?: `${SortOrder}`;

    @Field(() => areaCountOrderByAggregateInput, {nullable:true})
    _count?: areaCountOrderByAggregateInput;

    @Field(() => areaMaxOrderByAggregateInput, {nullable:true})
    _max?: areaMaxOrderByAggregateInput;

    @Field(() => areaMinOrderByAggregateInput, {nullable:true})
    _min?: areaMinOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { favouriteCountOrderByAggregateInput } from './favourite-count-order-by-aggregate.input';
import { favouriteMaxOrderByAggregateInput } from './favourite-max-order-by-aggregate.input';
import { favouriteMinOrderByAggregateInput } from './favourite-min-order-by-aggregate.input';

@InputType()
export class favouriteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => favouriteCountOrderByAggregateInput, {nullable:true})
    _count?: favouriteCountOrderByAggregateInput;

    @Field(() => favouriteMaxOrderByAggregateInput, {nullable:true})
    _max?: favouriteMaxOrderByAggregateInput;

    @Field(() => favouriteMinOrderByAggregateInput, {nullable:true})
    _min?: favouriteMinOrderByAggregateInput;
}

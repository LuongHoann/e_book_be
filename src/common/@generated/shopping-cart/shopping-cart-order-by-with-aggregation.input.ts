import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { shopping_cartCountOrderByAggregateInput } from './shopping-cart-count-order-by-aggregate.input';
import { shopping_cartMaxOrderByAggregateInput } from './shopping-cart-max-order-by-aggregate.input';
import { shopping_cartMinOrderByAggregateInput } from './shopping-cart-min-order-by-aggregate.input';

@InputType()
export class shopping_cartOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => shopping_cartCountOrderByAggregateInput, {nullable:true})
    _count?: shopping_cartCountOrderByAggregateInput;

    @Field(() => shopping_cartMaxOrderByAggregateInput, {nullable:true})
    _max?: shopping_cartMaxOrderByAggregateInput;

    @Field(() => shopping_cartMinOrderByAggregateInput, {nullable:true})
    _min?: shopping_cartMinOrderByAggregateInput;
}

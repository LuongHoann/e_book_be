import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { transaction_historyCountOrderByAggregateInput } from './transaction-history-count-order-by-aggregate.input';
import { transaction_historyMaxOrderByAggregateInput } from './transaction-history-max-order-by-aggregate.input';
import { transaction_historyMinOrderByAggregateInput } from './transaction-history-min-order-by-aggregate.input';

@InputType()
export class transaction_historyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    payment_date?: SortOrderInput;

    @Field(() => transaction_historyCountOrderByAggregateInput, {nullable:true})
    _count?: transaction_historyCountOrderByAggregateInput;

    @Field(() => transaction_historyMaxOrderByAggregateInput, {nullable:true})
    _max?: transaction_historyMaxOrderByAggregateInput;

    @Field(() => transaction_historyMinOrderByAggregateInput, {nullable:true})
    _min?: transaction_historyMinOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { reading_historyCountOrderByAggregateInput } from './reading-history-count-order-by-aggregate.input';
import { reading_historyAvgOrderByAggregateInput } from './reading-history-avg-order-by-aggregate.input';
import { reading_historyMaxOrderByAggregateInput } from './reading-history-max-order-by-aggregate.input';
import { reading_historyMinOrderByAggregateInput } from './reading-history-min-order-by-aggregate.input';
import { reading_historySumOrderByAggregateInput } from './reading-history-sum-order-by-aggregate.input';

@InputType()
export class reading_historyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    state?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    page?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    update_at?: SortOrderInput;

    @Field(() => reading_historyCountOrderByAggregateInput, {nullable:true})
    _count?: reading_historyCountOrderByAggregateInput;

    @Field(() => reading_historyAvgOrderByAggregateInput, {nullable:true})
    _avg?: reading_historyAvgOrderByAggregateInput;

    @Field(() => reading_historyMaxOrderByAggregateInput, {nullable:true})
    _max?: reading_historyMaxOrderByAggregateInput;

    @Field(() => reading_historyMinOrderByAggregateInput, {nullable:true})
    _min?: reading_historyMinOrderByAggregateInput;

    @Field(() => reading_historySumOrderByAggregateInput, {nullable:true})
    _sum?: reading_historySumOrderByAggregateInput;
}

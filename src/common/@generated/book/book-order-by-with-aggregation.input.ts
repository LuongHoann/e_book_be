import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { bookCountOrderByAggregateInput } from './book-count-order-by-aggregate.input';
import { bookAvgOrderByAggregateInput } from './book-avg-order-by-aggregate.input';
import { bookMaxOrderByAggregateInput } from './book-max-order-by-aggregate.input';
import { bookMinOrderByAggregateInput } from './book-min-order-by-aggregate.input';
import { bookSumOrderByAggregateInput } from './book-sum-order-by-aggregate.input';

@InputType()
export class bookOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pushlied_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    author?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isbn?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    page_number?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    discount_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    views?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    book_content_url?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    book_banner_url?: SortOrderInput;

    @Field(() => bookCountOrderByAggregateInput, {nullable:true})
    _count?: bookCountOrderByAggregateInput;

    @Field(() => bookAvgOrderByAggregateInput, {nullable:true})
    _avg?: bookAvgOrderByAggregateInput;

    @Field(() => bookMaxOrderByAggregateInput, {nullable:true})
    _max?: bookMaxOrderByAggregateInput;

    @Field(() => bookMinOrderByAggregateInput, {nullable:true})
    _min?: bookMinOrderByAggregateInput;

    @Field(() => bookSumOrderByAggregateInput, {nullable:true})
    _sum?: bookSumOrderByAggregateInput;
}

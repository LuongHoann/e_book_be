import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { book_discountCountOrderByAggregateInput } from './book-discount-count-order-by-aggregate.input';
import { book_discountAvgOrderByAggregateInput } from './book-discount-avg-order-by-aggregate.input';
import { book_discountMaxOrderByAggregateInput } from './book-discount-max-order-by-aggregate.input';
import { book_discountMinOrderByAggregateInput } from './book-discount-min-order-by-aggregate.input';
import { book_discountSumOrderByAggregateInput } from './book-discount-sum-order-by-aggregate.input';

@InputType()
export class book_discountOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount_id?: `${SortOrder}`;

    @Field(() => book_discountCountOrderByAggregateInput, {nullable:true})
    _count?: book_discountCountOrderByAggregateInput;

    @Field(() => book_discountAvgOrderByAggregateInput, {nullable:true})
    _avg?: book_discountAvgOrderByAggregateInput;

    @Field(() => book_discountMaxOrderByAggregateInput, {nullable:true})
    _max?: book_discountMaxOrderByAggregateInput;

    @Field(() => book_discountMinOrderByAggregateInput, {nullable:true})
    _min?: book_discountMinOrderByAggregateInput;

    @Field(() => book_discountSumOrderByAggregateInput, {nullable:true})
    _sum?: book_discountSumOrderByAggregateInput;
}

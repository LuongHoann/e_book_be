import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { category_bookCountOrderByAggregateInput } from './category-book-count-order-by-aggregate.input';
import { category_bookMaxOrderByAggregateInput } from './category-book-max-order-by-aggregate.input';
import { category_bookMinOrderByAggregateInput } from './category-book-min-order-by-aggregate.input';

@InputType()
export class category_bookOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    category?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => category_bookCountOrderByAggregateInput, {nullable:true})
    _count?: category_bookCountOrderByAggregateInput;

    @Field(() => category_bookMaxOrderByAggregateInput, {nullable:true})
    _max?: category_bookMaxOrderByAggregateInput;

    @Field(() => category_bookMinOrderByAggregateInput, {nullable:true})
    _min?: category_bookMinOrderByAggregateInput;
}

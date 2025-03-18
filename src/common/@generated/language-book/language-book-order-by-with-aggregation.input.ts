import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { language_bookCountOrderByAggregateInput } from './language-book-count-order-by-aggregate.input';
import { language_bookAvgOrderByAggregateInput } from './language-book-avg-order-by-aggregate.input';
import { language_bookMaxOrderByAggregateInput } from './language-book-max-order-by-aggregate.input';
import { language_bookMinOrderByAggregateInput } from './language-book-min-order-by-aggregate.input';
import { language_bookSumOrderByAggregateInput } from './language-book-sum-order-by-aggregate.input';

@InputType()
export class language_bookOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    language_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => language_bookCountOrderByAggregateInput, {nullable:true})
    _count?: language_bookCountOrderByAggregateInput;

    @Field(() => language_bookAvgOrderByAggregateInput, {nullable:true})
    _avg?: language_bookAvgOrderByAggregateInput;

    @Field(() => language_bookMaxOrderByAggregateInput, {nullable:true})
    _max?: language_bookMaxOrderByAggregateInput;

    @Field(() => language_bookMinOrderByAggregateInput, {nullable:true})
    _min?: language_bookMinOrderByAggregateInput;

    @Field(() => language_bookSumOrderByAggregateInput, {nullable:true})
    _sum?: language_bookSumOrderByAggregateInput;
}

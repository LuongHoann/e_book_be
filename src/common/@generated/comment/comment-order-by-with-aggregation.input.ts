import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { commentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { commentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { commentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';

@InputType()
export class commentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => commentCountOrderByAggregateInput, {nullable:true})
    _count?: commentCountOrderByAggregateInput;

    @Field(() => commentMaxOrderByAggregateInput, {nullable:true})
    _max?: commentMaxOrderByAggregateInput;

    @Field(() => commentMinOrderByAggregateInput, {nullable:true})
    _min?: commentMinOrderByAggregateInput;
}

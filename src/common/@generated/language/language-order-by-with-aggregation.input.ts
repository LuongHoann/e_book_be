import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languageCountOrderByAggregateInput } from './language-count-order-by-aggregate.input';
import { languageAvgOrderByAggregateInput } from './language-avg-order-by-aggregate.input';
import { languageMaxOrderByAggregateInput } from './language-max-order-by-aggregate.input';
import { languageMinOrderByAggregateInput } from './language-min-order-by-aggregate.input';
import { languageSumOrderByAggregateInput } from './language-sum-order-by-aggregate.input';

@InputType()
export class languageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    native_name?: `${SortOrder}`;

    @Field(() => languageCountOrderByAggregateInput, {nullable:true})
    _count?: languageCountOrderByAggregateInput;

    @Field(() => languageAvgOrderByAggregateInput, {nullable:true})
    _avg?: languageAvgOrderByAggregateInput;

    @Field(() => languageMaxOrderByAggregateInput, {nullable:true})
    _max?: languageMaxOrderByAggregateInput;

    @Field(() => languageMinOrderByAggregateInput, {nullable:true})
    _min?: languageMinOrderByAggregateInput;

    @Field(() => languageSumOrderByAggregateInput, {nullable:true})
    _sum?: languageSumOrderByAggregateInput;
}

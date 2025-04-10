import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class bookSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    page_number?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    views?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    published_at?: `${SortOrder}`;
}

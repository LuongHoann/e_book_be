import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class category_bookSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    category_id?: `${SortOrder}`;
}

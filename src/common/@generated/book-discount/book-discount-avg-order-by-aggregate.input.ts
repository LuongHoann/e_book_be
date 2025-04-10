import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class book_discountAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    discount_id?: `${SortOrder}`;
}

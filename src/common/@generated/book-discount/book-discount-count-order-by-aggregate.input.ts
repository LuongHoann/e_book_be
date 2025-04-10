import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class book_discountCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount_id?: `${SortOrder}`;
}

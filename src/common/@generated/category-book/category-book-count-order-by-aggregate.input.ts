import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class category_bookCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    category_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;
}

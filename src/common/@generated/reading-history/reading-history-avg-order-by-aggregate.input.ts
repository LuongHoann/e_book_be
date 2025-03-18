import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class reading_historyAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    page?: `${SortOrder}`;
}

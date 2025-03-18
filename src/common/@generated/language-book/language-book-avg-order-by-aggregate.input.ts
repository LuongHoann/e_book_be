import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class language_bookAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    language_id?: `${SortOrder}`;
}

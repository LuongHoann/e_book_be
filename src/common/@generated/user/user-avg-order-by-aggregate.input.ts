import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class userAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
}

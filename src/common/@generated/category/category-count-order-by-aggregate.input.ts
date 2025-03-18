import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class categoryCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

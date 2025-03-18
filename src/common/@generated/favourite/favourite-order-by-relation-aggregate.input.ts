import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class favouriteOrderByRelationAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

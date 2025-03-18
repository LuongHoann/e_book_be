import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class areaCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    area_name?: `${SortOrder}`;
}

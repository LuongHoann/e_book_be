import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class discount_codeMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount_code_name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount_value?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount_value_percent?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    area_code?: `${SortOrder}`;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { bookOrderByRelationAggregateInput } from '../book/book-order-by-relation-aggregate.input';
import { areaOrderByWithRelationInput } from '../area/area-order-by-with-relation.input';

@InputType()
export class discount_codeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    discount_code_name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    discount_value?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    discount_value_percent?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    area_name?: SortOrderInput;

    @Field(() => bookOrderByRelationAggregateInput, {nullable:true})
    @Type(() => bookOrderByRelationAggregateInput)
    book?: bookOrderByRelationAggregateInput;

    @Field(() => areaOrderByWithRelationInput, {nullable:true})
    @Type(() => areaOrderByWithRelationInput)
    area?: areaOrderByWithRelationInput;
}

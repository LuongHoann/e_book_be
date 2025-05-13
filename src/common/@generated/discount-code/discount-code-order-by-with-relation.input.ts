import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { book_discountOrderByRelationAggregateInput } from '../book-discount/book-discount-order-by-relation-aggregate.input';
import { areaOrderByWithRelationInput } from '../area/area-order-by-with-relation.input';

@InputType()
export class discount_codeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    value?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    value_percent?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    area_code?: SortOrderInput;

    @Field(() => book_discountOrderByRelationAggregateInput, {nullable:true})
    @Type(() => book_discountOrderByRelationAggregateInput)
    book_discount?: book_discountOrderByRelationAggregateInput;

    @Field(() => areaOrderByWithRelationInput, {nullable:true})
    @Type(() => areaOrderByWithRelationInput)
    area?: areaOrderByWithRelationInput;
}

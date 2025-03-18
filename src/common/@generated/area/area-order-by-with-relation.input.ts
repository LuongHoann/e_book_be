import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { discount_codeOrderByRelationAggregateInput } from '../discount-code/discount-code-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class areaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    area_name?: `${SortOrder}`;

    @Field(() => discount_codeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => discount_codeOrderByRelationAggregateInput)
    discount_code?: discount_codeOrderByRelationAggregateInput;
}

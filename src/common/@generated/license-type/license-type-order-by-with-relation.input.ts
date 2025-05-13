import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { licenseOrderByRelationAggregateInput } from '../license/license-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class license_typeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    download_count?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    duration?: SortOrderInput;

    @Field(() => licenseOrderByRelationAggregateInput, {nullable:true})
    @Type(() => licenseOrderByRelationAggregateInput)
    license?: licenseOrderByRelationAggregateInput;
}

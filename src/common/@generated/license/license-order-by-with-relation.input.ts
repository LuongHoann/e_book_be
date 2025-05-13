import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { bookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { license_typeOrderByWithRelationInput } from '../license-type/license-type-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { license_ownershipOrderByRelationAggregateInput } from '../license-ownership/license-ownership-order-by-relation-aggregate.input';

@InputType()
export class licenseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    book_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    license_type_id?: SortOrderInput;

    @Field(() => bookOrderByWithRelationInput, {nullable:true})
    book?: bookOrderByWithRelationInput;

    @Field(() => license_typeOrderByWithRelationInput, {nullable:true})
    @Type(() => license_typeOrderByWithRelationInput)
    license_type?: license_typeOrderByWithRelationInput;

    @Field(() => license_ownershipOrderByRelationAggregateInput, {nullable:true})
    license_ownership?: license_ownershipOrderByRelationAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { category_bookOrderByRelationAggregateInput } from '../category-book/category-book-order-by-relation-aggregate.input';

@InputType()
export class categoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => category_bookOrderByRelationAggregateInput, {nullable:true})
    category_book?: category_bookOrderByRelationAggregateInput;
}

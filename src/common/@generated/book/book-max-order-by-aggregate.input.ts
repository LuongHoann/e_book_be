import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class bookMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    author?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isbn?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    page_number?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    views?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    banner_key?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_key?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    published_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
}

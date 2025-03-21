import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class bookCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pushlied_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    author?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isbn?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    page_number?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    views?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_content_url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_banner_url?: `${SortOrder}`;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { discount_codeOrderByWithRelationInput } from '../discount-code/discount-code-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { category_bookOrderByRelationAggregateInput } from '../category-book/category-book-order-by-relation-aggregate.input';
import { commentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { favouriteOrderByRelationAggregateInput } from '../favourite/favourite-order-by-relation-aggregate.input';
import { language_bookOrderByRelationAggregateInput } from '../language-book/language-book-order-by-relation-aggregate.input';
import { licenseOrderByRelationAggregateInput } from '../license/license-order-by-relation-aggregate.input';
import { reading_historyOrderByRelationAggregateInput } from '../reading-history/reading-history-order-by-relation-aggregate.input';
import { reviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { shopping_cartOrderByRelationAggregateInput } from '../shopping-cart/shopping-cart-order-by-relation-aggregate.input';
import { transaction_historyOrderByRelationAggregateInput } from '../transaction-history/transaction-history-order-by-relation-aggregate.input';

@InputType()
export class bookOrderByWithRelationInput {

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

    @Field(() => SortOrderInput, {nullable:true})
    discount_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    views?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    book_content_url?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    book_banner_url?: SortOrderInput;

    @Field(() => discount_codeOrderByWithRelationInput, {nullable:true})
    @Type(() => discount_codeOrderByWithRelationInput)
    discount_code?: discount_codeOrderByWithRelationInput;

    @Field(() => category_bookOrderByRelationAggregateInput, {nullable:true})
    category_book?: category_bookOrderByRelationAggregateInput;

    @Field(() => commentOrderByRelationAggregateInput, {nullable:true})
    comment?: commentOrderByRelationAggregateInput;

    @Field(() => favouriteOrderByRelationAggregateInput, {nullable:true})
    favourite?: favouriteOrderByRelationAggregateInput;

    @Field(() => language_bookOrderByRelationAggregateInput, {nullable:true})
    language_book?: language_bookOrderByRelationAggregateInput;

    @Field(() => licenseOrderByRelationAggregateInput, {nullable:true})
    @Type(() => licenseOrderByRelationAggregateInput)
    license?: licenseOrderByRelationAggregateInput;

    @Field(() => reading_historyOrderByRelationAggregateInput, {nullable:true})
    reading_history?: reading_historyOrderByRelationAggregateInput;

    @Field(() => reviewOrderByRelationAggregateInput, {nullable:true})
    review?: reviewOrderByRelationAggregateInput;

    @Field(() => shopping_cartOrderByRelationAggregateInput, {nullable:true})
    shopping_cart?: shopping_cartOrderByRelationAggregateInput;

    @Field(() => transaction_historyOrderByRelationAggregateInput, {nullable:true})
    transaction_history?: transaction_historyOrderByRelationAggregateInput;
}

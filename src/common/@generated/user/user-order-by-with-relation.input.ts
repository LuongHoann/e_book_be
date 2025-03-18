import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { commentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { favouriteOrderByRelationAggregateInput } from '../favourite/favourite-order-by-relation-aggregate.input';
import { license_ownershipOrderByRelationAggregateInput } from '../license-ownership/license-ownership-order-by-relation-aggregate.input';
import { newsOrderByRelationAggregateInput } from '../news/news-order-by-relation-aggregate.input';
import { reading_historyOrderByRelationAggregateInput } from '../reading-history/reading-history-order-by-relation-aggregate.input';
import { reviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { shopping_cartOrderByRelationAggregateInput } from '../shopping-cart/shopping-cart-order-by-relation-aggregate.input';
import { transaction_historyOrderByRelationAggregateInput } from '../transaction-history/transaction-history-order-by-relation-aggregate.input';
import { roleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';

@InputType()
export class userOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    avatar?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expired_code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    account_status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;

    @Field(() => commentOrderByRelationAggregateInput, {nullable:true})
    comment?: commentOrderByRelationAggregateInput;

    @Field(() => favouriteOrderByRelationAggregateInput, {nullable:true})
    favourite?: favouriteOrderByRelationAggregateInput;

    @Field(() => license_ownershipOrderByRelationAggregateInput, {nullable:true})
    license_ownership?: license_ownershipOrderByRelationAggregateInput;

    @Field(() => newsOrderByRelationAggregateInput, {nullable:true})
    news?: newsOrderByRelationAggregateInput;

    @Field(() => reading_historyOrderByRelationAggregateInput, {nullable:true})
    reading_history?: reading_historyOrderByRelationAggregateInput;

    @Field(() => reviewOrderByRelationAggregateInput, {nullable:true})
    review?: reviewOrderByRelationAggregateInput;

    @Field(() => shopping_cartOrderByRelationAggregateInput, {nullable:true})
    shopping_cart?: shopping_cartOrderByRelationAggregateInput;

    @Field(() => transaction_historyOrderByRelationAggregateInput, {nullable:true})
    transaction_history?: transaction_historyOrderByRelationAggregateInput;

    @Field(() => roleOrderByWithRelationInput, {nullable:true})
    role_user_roleTorole?: roleOrderByWithRelationInput;
}

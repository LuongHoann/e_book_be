import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { CommentListRelationFilter } from '../prisma/comment-list-relation-filter.input';
import { FavouriteListRelationFilter } from '../prisma/favourite-list-relation-filter.input';
import { License_ownershipListRelationFilter } from '../prisma/license-ownership-list-relation-filter.input';
import { NewsListRelationFilter } from '../prisma/news-list-relation-filter.input';
import { Reading_historyListRelationFilter } from '../prisma/reading-history-list-relation-filter.input';
import { ReviewListRelationFilter } from '../prisma/review-list-relation-filter.input';
import { Shopping_cartListRelationFilter } from '../prisma/shopping-cart-list-relation-filter.input';
import { Transaction_historyListRelationFilter } from '../prisma/transaction-history-list-relation-filter.input';
import { RoleScalarRelationFilter } from '../prisma/role-scalar-relation-filter.input';

@InputType()
export class userWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [userWhereInput], {nullable:true})
    AND?: Array<userWhereInput>;

    @Field(() => [userWhereInput], {nullable:true})
    OR?: Array<userWhereInput>;

    @Field(() => [userWhereInput], {nullable:true})
    NOT?: Array<userWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expired_code?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    account_status?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    role?: IntFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comment?: CommentListRelationFilter;

    @Field(() => FavouriteListRelationFilter, {nullable:true})
    favourite?: FavouriteListRelationFilter;

    @Field(() => License_ownershipListRelationFilter, {nullable:true})
    license_ownership?: License_ownershipListRelationFilter;

    @Field(() => NewsListRelationFilter, {nullable:true})
    news?: NewsListRelationFilter;

    @Field(() => Reading_historyListRelationFilter, {nullable:true})
    reading_history?: Reading_historyListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    review?: ReviewListRelationFilter;

    @Field(() => Shopping_cartListRelationFilter, {nullable:true})
    shopping_cart?: Shopping_cartListRelationFilter;

    @Field(() => Transaction_historyListRelationFilter, {nullable:true})
    transaction_history?: Transaction_historyListRelationFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role_user_roleTorole?: RoleScalarRelationFilter;
}

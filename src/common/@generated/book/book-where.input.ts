import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Book_discountListRelationFilter } from '../prisma/book-discount-list-relation-filter.input';
import { Type } from 'class-transformer';
import { Category_bookListRelationFilter } from '../prisma/category-book-list-relation-filter.input';
import { CommentListRelationFilter } from '../prisma/comment-list-relation-filter.input';
import { FavouriteListRelationFilter } from '../prisma/favourite-list-relation-filter.input';
import { Language_bookListRelationFilter } from '../prisma/language-book-list-relation-filter.input';
import { LicenseListRelationFilter } from '../prisma/license-list-relation-filter.input';
import { Reading_historyListRelationFilter } from '../prisma/reading-history-list-relation-filter.input';
import { ReviewListRelationFilter } from '../prisma/review-list-relation-filter.input';
import { Shopping_cartListRelationFilter } from '../prisma/shopping-cart-list-relation-filter.input';
import { Transaction_historyListRelationFilter } from '../prisma/transaction-history-list-relation-filter.input';

@InputType()
export class bookWhereInput {

    @Field(() => [bookWhereInput], {nullable:true})
    AND?: Array<bookWhereInput>;

    @Field(() => [bookWhereInput], {nullable:true})
    OR?: Array<bookWhereInput>;

    @Field(() => [bookWhereInput], {nullable:true})
    NOT?: Array<bookWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    book_title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    author?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    isbn?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    page_number?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    views?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    banner_key?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    book_key?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    published_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => Book_discountListRelationFilter, {nullable:true})
    @Type(() => Book_discountListRelationFilter)
    book_discount?: Book_discountListRelationFilter;

    @Field(() => Category_bookListRelationFilter, {nullable:true})
    category_book?: Category_bookListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comment?: CommentListRelationFilter;

    @Field(() => FavouriteListRelationFilter, {nullable:true})
    favourite?: FavouriteListRelationFilter;

    @Field(() => Language_bookListRelationFilter, {nullable:true})
    language_book?: Language_bookListRelationFilter;

    @Field(() => LicenseListRelationFilter, {nullable:true})
    @Type(() => LicenseListRelationFilter)
    license?: LicenseListRelationFilter;

    @Field(() => Reading_historyListRelationFilter, {nullable:true})
    reading_history?: Reading_historyListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    review?: ReviewListRelationFilter;

    @Field(() => Shopping_cartListRelationFilter, {nullable:true})
    shopping_cart?: Shopping_cartListRelationFilter;

    @Field(() => Transaction_historyListRelationFilter, {nullable:true})
    transaction_history?: Transaction_historyListRelationFilter;
}

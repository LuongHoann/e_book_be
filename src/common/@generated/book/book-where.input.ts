import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Discount_codeNullableScalarRelationFilter } from '../prisma/discount-code-nullable-scalar-relation-filter.input';
import { Category_bookListRelationFilter } from '../prisma/category-book-list-relation-filter.input';
import { CommentListRelationFilter } from '../prisma/comment-list-relation-filter.input';
import { FavouriteListRelationFilter } from '../prisma/favourite-list-relation-filter.input';
import { Language_bookListRelationFilter } from '../prisma/language-book-list-relation-filter.input';
import { LicenseListRelationFilter } from '../prisma/license-list-relation-filter.input';
import { Type } from 'class-transformer';
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

    @Field(() => IntFilter, {nullable:true})
    pushlied_at?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    author?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    isbn?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    page_number?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    discount_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    views?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    book_content_url?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    book_banner_url?: StringNullableFilter;

    @Field(() => Discount_codeNullableScalarRelationFilter, {nullable:true})
    discount_code?: Discount_codeNullableScalarRelationFilter;

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

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { book_discount } from '../book-discount/book-discount.model';
import { category_book } from '../category-book/category-book.model';
import { comment } from '../comment/comment.model';
import { favourite } from '../favourite/favourite.model';
import { language_book } from '../language-book/language-book.model';
import { license } from '../license/license.model';
import { reading_history } from '../reading-history/reading-history.model';
import { review } from '../review/review.model';
import { shopping_cart } from '../shopping-cart/shopping-cart.model';
import { transaction_history } from '../transaction-history/transaction-history.model';
import { BookCount } from '../prisma/book-count.output';

@ObjectType()
export class book {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    book_title!: string;

    @Field(() => String, {nullable:false})
    author!: string;

    @Field(() => String, {nullable:false})
    isbn!: string;

    @Field(() => Int, {nullable:false})
    page_number!: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => String, {nullable:true})
    banner_key!: string | null;

    @Field(() => String, {nullable:false})
    book_key!: string;

    @Field(() => Int, {nullable:false})
    published_at!: number;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => [book_discount], {nullable:true})
    book_discount?: Array<book_discount>;

    @Field(() => [category_book], {nullable:true})
    category_book?: Array<category_book>;

    @Field(() => [comment], {nullable:true})
    comment?: Array<comment>;

    @Field(() => [favourite], {nullable:true})
    favourite?: Array<favourite>;

    @Field(() => [language_book], {nullable:true})
    language_book?: Array<language_book>;

    @Field(() => [license], {nullable:true})
    license?: Array<license>;

    @Field(() => [reading_history], {nullable:true})
    reading_history?: Array<reading_history>;

    @Field(() => [review], {nullable:true})
    review?: Array<review>;

    @Field(() => [shopping_cart], {nullable:true})
    shopping_cart?: Array<shopping_cart>;

    @Field(() => [transaction_history], {nullable:true})
    transaction_history?: Array<transaction_history>;

    @Field(() => BookCount, {nullable:false})
    _count?: BookCount;
}

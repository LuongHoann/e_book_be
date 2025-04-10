import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { book_discountUncheckedCreateNestedManyWithoutBookInput } from '../book-discount/book-discount-unchecked-create-nested-many-without-book.input';
import { Type } from 'class-transformer';
import { category_bookUncheckedCreateNestedManyWithoutBookInput } from '../category-book/category-book-unchecked-create-nested-many-without-book.input';
import { commentUncheckedCreateNestedManyWithoutBookInput } from '../comment/comment-unchecked-create-nested-many-without-book.input';
import { favouriteUncheckedCreateNestedManyWithoutBookInput } from '../favourite/favourite-unchecked-create-nested-many-without-book.input';
import { language_bookUncheckedCreateNestedManyWithoutBookInput } from '../language-book/language-book-unchecked-create-nested-many-without-book.input';
import { licenseUncheckedCreateNestedManyWithoutBookInput } from '../license/license-unchecked-create-nested-many-without-book.input';
import { reading_historyUncheckedCreateNestedManyWithoutBookInput } from '../reading-history/reading-history-unchecked-create-nested-many-without-book.input';
import { reviewUncheckedCreateNestedManyWithoutBookInput } from '../review/review-unchecked-create-nested-many-without-book.input';
import { transaction_historyUncheckedCreateNestedManyWithoutBookInput } from '../transaction-history/transaction-history-unchecked-create-nested-many-without-book.input';

@InputType()
export class bookUncheckedCreateWithoutShopping_cartInput {

    @Field(() => String, {nullable:true})
    id?: string;

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
    created_at?: Date | string;

    @Field(() => String, {nullable:true})
    banner_key?: string;

    @Field(() => String, {nullable:false})
    book_key!: string;

    @Field(() => Int, {nullable:false})
    published_at!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => book_discountUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    @Type(() => book_discountUncheckedCreateNestedManyWithoutBookInput)
    book_discount?: book_discountUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => category_bookUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    category_book?: category_bookUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => commentUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    comment?: commentUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => favouriteUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    favourite?: favouriteUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => language_bookUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    language_book?: language_bookUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => licenseUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    @Type(() => licenseUncheckedCreateNestedManyWithoutBookInput)
    license?: licenseUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => reading_historyUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    reading_history?: reading_historyUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => reviewUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    review?: reviewUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => transaction_historyUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    transaction_history?: transaction_historyUncheckedCreateNestedManyWithoutBookInput;
}

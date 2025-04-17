import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { book_discountCreateNestedManyWithoutBookInput } from '../book-discount/book-discount-create-nested-many-without-book.input';
import { Type } from 'class-transformer';
import { category_bookCreateNestedManyWithoutBookInput } from '../category-book/category-book-create-nested-many-without-book.input';
import { commentCreateNestedManyWithoutBookInput } from '../comment/comment-create-nested-many-without-book.input';
import { favouriteCreateNestedManyWithoutBookInput } from '../favourite/favourite-create-nested-many-without-book.input';
import { language_bookCreateNestedManyWithoutBookInput } from '../language-book/language-book-create-nested-many-without-book.input';
import { licenseCreateNestedManyWithoutBookInput } from '../license/license-create-nested-many-without-book.input';
import { reading_historyCreateNestedManyWithoutBookInput } from '../reading-history/reading-history-create-nested-many-without-book.input';
import { reviewCreateNestedManyWithoutBookInput } from '../review/review-create-nested-many-without-book.input';
import { shopping_cartCreateNestedManyWithoutBookInput } from '../shopping-cart/shopping-cart-create-nested-many-without-book.input';

@InputType()
export class bookCreateWithoutTransaction_historyInput {

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

    @Field(() => Date, {nullable:false})
    published_at!: Date | string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => book_discountCreateNestedManyWithoutBookInput, {nullable:true})
    @Type(() => book_discountCreateNestedManyWithoutBookInput)
    book_discount?: book_discountCreateNestedManyWithoutBookInput;

    @Field(() => category_bookCreateNestedManyWithoutBookInput, {nullable:true})
    category_book?: category_bookCreateNestedManyWithoutBookInput;

    @Field(() => commentCreateNestedManyWithoutBookInput, {nullable:true})
    comment?: commentCreateNestedManyWithoutBookInput;

    @Field(() => favouriteCreateNestedManyWithoutBookInput, {nullable:true})
    favourite?: favouriteCreateNestedManyWithoutBookInput;

    @Field(() => language_bookCreateNestedManyWithoutBookInput, {nullable:true})
    language_book?: language_bookCreateNestedManyWithoutBookInput;

    @Field(() => licenseCreateNestedManyWithoutBookInput, {nullable:true})
    @Type(() => licenseCreateNestedManyWithoutBookInput)
    license?: licenseCreateNestedManyWithoutBookInput;

    @Field(() => reading_historyCreateNestedManyWithoutBookInput, {nullable:true})
    reading_history?: reading_historyCreateNestedManyWithoutBookInput;

    @Field(() => reviewCreateNestedManyWithoutBookInput, {nullable:true})
    review?: reviewCreateNestedManyWithoutBookInput;

    @Field(() => shopping_cartCreateNestedManyWithoutBookInput, {nullable:true})
    shopping_cart?: shopping_cartCreateNestedManyWithoutBookInput;
}

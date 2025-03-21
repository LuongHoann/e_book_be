import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { discount_codeCreateNestedOneWithoutBookInput } from '../discount-code/discount-code-create-nested-one-without-book.input';
import { Type } from 'class-transformer';
import { category_bookCreateNestedManyWithoutBookInput } from '../category-book/category-book-create-nested-many-without-book.input';
import { commentCreateNestedManyWithoutBookInput } from '../comment/comment-create-nested-many-without-book.input';
import { language_bookCreateNestedManyWithoutBookInput } from '../language-book/language-book-create-nested-many-without-book.input';
import { licenseCreateNestedManyWithoutBookInput } from '../license/license-create-nested-many-without-book.input';
import { reading_historyCreateNestedManyWithoutBookInput } from '../reading-history/reading-history-create-nested-many-without-book.input';
import { reviewCreateNestedManyWithoutBookInput } from '../review/review-create-nested-many-without-book.input';
import { shopping_cartCreateNestedManyWithoutBookInput } from '../shopping-cart/shopping-cart-create-nested-many-without-book.input';
import { transaction_historyCreateNestedManyWithoutBookInput } from '../transaction-history/transaction-history-create-nested-many-without-book.input';

@InputType()
export class bookCreateWithoutFavouriteInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    book_title!: string;

    @Field(() => Int, {nullable:false})
    pushlied_at!: number;

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

    @Field(() => String, {nullable:false})
    book_content_url!: string;

    @Field(() => String, {nullable:true})
    book_banner_url?: string;

    @Field(() => discount_codeCreateNestedOneWithoutBookInput, {nullable:true})
    @Type(() => discount_codeCreateNestedOneWithoutBookInput)
    discount_code?: discount_codeCreateNestedOneWithoutBookInput;

    @Field(() => category_bookCreateNestedManyWithoutBookInput, {nullable:true})
    category_book?: category_bookCreateNestedManyWithoutBookInput;

    @Field(() => commentCreateNestedManyWithoutBookInput, {nullable:true})
    comment?: commentCreateNestedManyWithoutBookInput;

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

    @Field(() => transaction_historyCreateNestedManyWithoutBookInput, {nullable:true})
    transaction_history?: transaction_historyCreateNestedManyWithoutBookInput;
}

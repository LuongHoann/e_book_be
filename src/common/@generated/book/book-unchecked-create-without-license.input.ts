import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { category_bookUncheckedCreateNestedManyWithoutBookInput } from '../category-book/category-book-unchecked-create-nested-many-without-book.input';
import { commentUncheckedCreateNestedManyWithoutBookInput } from '../comment/comment-unchecked-create-nested-many-without-book.input';
import { favouriteUncheckedCreateNestedManyWithoutBookInput } from '../favourite/favourite-unchecked-create-nested-many-without-book.input';
import { language_bookUncheckedCreateNestedManyWithoutBookInput } from '../language-book/language-book-unchecked-create-nested-many-without-book.input';
import { reading_historyUncheckedCreateNestedManyWithoutBookInput } from '../reading-history/reading-history-unchecked-create-nested-many-without-book.input';
import { reviewUncheckedCreateNestedManyWithoutBookInput } from '../review/review-unchecked-create-nested-many-without-book.input';
import { shopping_cartUncheckedCreateNestedManyWithoutBookInput } from '../shopping-cart/shopping-cart-unchecked-create-nested-many-without-book.input';
import { transaction_historyUncheckedCreateNestedManyWithoutBookInput } from '../transaction-history/transaction-history-unchecked-create-nested-many-without-book.input';

@InputType()
export class bookUncheckedCreateWithoutLicenseInput {

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

    @Field(() => Int, {nullable:true})
    page_number?: number;

    @Field(() => Int, {nullable:true})
    discount_id?: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => category_bookUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    category_book?: category_bookUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => commentUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    comment?: commentUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => favouriteUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    favourite?: favouriteUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => language_bookUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    language_book?: language_bookUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => reading_historyUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    reading_history?: reading_historyUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => reviewUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    review?: reviewUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => shopping_cartUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    shopping_cart?: shopping_cartUncheckedCreateNestedManyWithoutBookInput;

    @Field(() => transaction_historyUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    transaction_history?: transaction_historyUncheckedCreateNestedManyWithoutBookInput;
}

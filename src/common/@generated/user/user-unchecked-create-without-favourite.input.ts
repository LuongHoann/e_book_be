import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { commentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
import { license_ownershipUncheckedCreateNestedManyWithoutUserInput } from '../license-ownership/license-ownership-unchecked-create-nested-many-without-user.input';
import { newsUncheckedCreateNestedManyWithoutUserInput } from '../news/news-unchecked-create-nested-many-without-user.input';
import { reading_historyUncheckedCreateNestedManyWithoutUserInput } from '../reading-history/reading-history-unchecked-create-nested-many-without-user.input';
import { reviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';
import { shopping_cartUncheckedCreateNestedManyWithoutUserInput } from '../shopping-cart/shopping-cart-unchecked-create-nested-many-without-user.input';
import { transaction_historyUncheckedCreateNestedManyWithoutUserInput } from '../transaction-history/transaction-history-unchecked-create-nested-many-without-user.input';

@InputType()
export class userUncheckedCreateWithoutFavouriteInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    user_name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    expired_code!: Date | string;

    @Field(() => Boolean, {nullable:false})
    account_status!: boolean;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => commentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comment?: commentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => license_ownershipUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    license_ownership?: license_ownershipUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => newsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    news?: newsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => reading_historyUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reading_history?: reading_historyUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => reviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => shopping_cartUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shopping_cart?: shopping_cartUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => transaction_historyUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    transaction_history?: transaction_historyUncheckedCreateNestedManyWithoutUserInput;
}

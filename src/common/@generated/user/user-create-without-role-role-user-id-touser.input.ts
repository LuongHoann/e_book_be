import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { favouriteCreateNestedManyWithoutUserInput } from '../favourite/favourite-create-nested-many-without-user.input';
import { license_ownershipCreateNestedManyWithoutUserInput } from '../license-ownership/license-ownership-create-nested-many-without-user.input';
import { newsCreateNestedManyWithoutUserInput } from '../news/news-create-nested-many-without-user.input';
import { reviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';
import { shopping_cartCreateNestedManyWithoutUserInput } from '../shopping-cart/shopping-cart-create-nested-many-without-user.input';
import { transaction_historyCreateNestedManyWithoutUserInput } from '../transaction-history/transaction-history-create-nested-many-without-user.input';
import { roleCreateNestedOneWithoutUser_user_roleToroleInput } from '../role/role-create-nested-one-without-user-user-role-torole.input';

@InputType()
export class userCreateWithoutRole_role_user_idTouserInput {

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

    @Field(() => commentCreateNestedManyWithoutUserInput, {nullable:true})
    comment?: commentCreateNestedManyWithoutUserInput;

    @Field(() => favouriteCreateNestedManyWithoutUserInput, {nullable:true})
    favourite?: favouriteCreateNestedManyWithoutUserInput;

    @Field(() => license_ownershipCreateNestedManyWithoutUserInput, {nullable:true})
    license_ownership?: license_ownershipCreateNestedManyWithoutUserInput;

    @Field(() => newsCreateNestedManyWithoutUserInput, {nullable:true})
    news?: newsCreateNestedManyWithoutUserInput;

    @Field(() => reviewCreateNestedManyWithoutUserInput, {nullable:true})
    review?: reviewCreateNestedManyWithoutUserInput;

    @Field(() => shopping_cartCreateNestedManyWithoutUserInput, {nullable:true})
    shopping_cart?: shopping_cartCreateNestedManyWithoutUserInput;

    @Field(() => transaction_historyCreateNestedManyWithoutUserInput, {nullable:true})
    transaction_history?: transaction_historyCreateNestedManyWithoutUserInput;

    @Field(() => roleCreateNestedOneWithoutUser_user_roleToroleInput, {nullable:false})
    role_user_roleTorole!: roleCreateNestedOneWithoutUser_user_roleToroleInput;
}

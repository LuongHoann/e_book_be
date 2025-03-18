import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { comment } from '../comment/comment.model';
import { favourite } from '../favourite/favourite.model';
import { license_ownership } from '../license-ownership/license-ownership.model';
import { news } from '../news/news.model';
import { reading_history } from '../reading-history/reading-history.model';
import { review } from '../review/review.model';
import { shopping_cart } from '../shopping-cart/shopping-cart.model';
import { transaction_history } from '../transaction-history/transaction-history.model';
import { role } from '../role/role.model';
import { UserCount } from '../prisma/user-count.output';

@ObjectType()
export class user {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    expired_code!: Date;

    @Field(() => Boolean, {nullable:false})
    account_status!: boolean;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => [comment], {nullable:true})
    comment?: Array<comment>;

    @Field(() => [favourite], {nullable:true})
    favourite?: Array<favourite>;

    @Field(() => [license_ownership], {nullable:true})
    license_ownership?: Array<license_ownership>;

    @Field(() => [news], {nullable:true})
    news?: Array<news>;

    @Field(() => [reading_history], {nullable:true})
    reading_history?: Array<reading_history>;

    @Field(() => [review], {nullable:true})
    review?: Array<review>;

    @Field(() => [shopping_cart], {nullable:true})
    shopping_cart?: Array<shopping_cart>;

    @Field(() => [transaction_history], {nullable:true})
    transaction_history?: Array<transaction_history>;

    @Field(() => role, {nullable:false})
    role_user_roleTorole?: role;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    comment!: number;

    @Field(() => Int, {nullable:false})
    favourite!: number;

    @Field(() => Int, {nullable:false})
    license_ownership!: number;

    @Field(() => Int, {nullable:false})
    news!: number;

    @Field(() => Int, {nullable:false})
    reading_history!: number;

    @Field(() => Int, {nullable:false})
    review!: number;

    @Field(() => Int, {nullable:false})
    shopping_cart!: number;

    @Field(() => Int, {nullable:false})
    transaction_history!: number;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { userCreateNestedOneWithoutReviewInput } from '../user/user-create-nested-one-without-review.input';

@InputType()
export class reviewCreateWithoutBookInput {

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => userCreateNestedOneWithoutReviewInput, {nullable:false})
    user!: userCreateNestedOneWithoutReviewInput;
}

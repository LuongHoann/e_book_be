import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutReviewInput } from '../book/book-create-nested-one-without-review.input';

@InputType()
export class reviewCreateWithoutUserInput {

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => bookCreateNestedOneWithoutReviewInput, {nullable:false})
    book!: bookCreateNestedOneWithoutReviewInput;
}

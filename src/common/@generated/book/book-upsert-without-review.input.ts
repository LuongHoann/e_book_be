import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutReviewInput } from './book-update-without-review.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutReviewInput } from './book-create-without-review.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutReviewInput {

    @Field(() => bookUpdateWithoutReviewInput, {nullable:false})
    @Type(() => bookUpdateWithoutReviewInput)
    update!: bookUpdateWithoutReviewInput;

    @Field(() => bookCreateWithoutReviewInput, {nullable:false})
    @Type(() => bookCreateWithoutReviewInput)
    create!: bookCreateWithoutReviewInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutReviewInput } from './book-update-without-review.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutReviewInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutReviewInput, {nullable:false})
    @Type(() => bookUpdateWithoutReviewInput)
    data!: bookUpdateWithoutReviewInput;
}

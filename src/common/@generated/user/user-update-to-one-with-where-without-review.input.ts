import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutReviewInput } from './user-update-without-review.input';

@InputType()
export class userUpdateToOneWithWhereWithoutReviewInput {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => userUpdateWithoutReviewInput, {nullable:false})
    @Type(() => userUpdateWithoutReviewInput)
    data!: userUpdateWithoutReviewInput;
}

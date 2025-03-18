import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateWithoutReviewInput } from './user-update-without-review.input';
import { Type } from 'class-transformer';
import { userCreateWithoutReviewInput } from './user-create-without-review.input';
import { userWhereInput } from './user-where.input';

@InputType()
export class userUpsertWithoutReviewInput {

    @Field(() => userUpdateWithoutReviewInput, {nullable:false})
    @Type(() => userUpdateWithoutReviewInput)
    update!: userUpdateWithoutReviewInput;

    @Field(() => userCreateWithoutReviewInput, {nullable:false})
    @Type(() => userCreateWithoutReviewInput)
    create!: userCreateWithoutReviewInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;
}

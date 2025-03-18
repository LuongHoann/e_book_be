import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutReviewInput } from './user-create-without-review.input';

@InputType()
export class userCreateOrConnectWithoutReviewInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutReviewInput, {nullable:false})
    @Type(() => userCreateWithoutReviewInput)
    create!: userCreateWithoutReviewInput;
}

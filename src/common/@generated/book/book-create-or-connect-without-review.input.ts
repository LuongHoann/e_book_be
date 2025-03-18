import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutReviewInput } from './book-create-without-review.input';

@InputType()
export class bookCreateOrConnectWithoutReviewInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutReviewInput, {nullable:false})
    @Type(() => bookCreateWithoutReviewInput)
    create!: bookCreateWithoutReviewInput;
}

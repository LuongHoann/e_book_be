import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutReviewInput } from './book-create-without-review.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutReviewInput } from './book-create-or-connect-without-review.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookCreateNestedOneWithoutReviewInput {

    @Field(() => bookCreateWithoutReviewInput, {nullable:true})
    @Type(() => bookCreateWithoutReviewInput)
    create?: bookCreateWithoutReviewInput;

    @Field(() => bookCreateOrConnectWithoutReviewInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutReviewInput)
    connectOrCreate?: bookCreateOrConnectWithoutReviewInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}

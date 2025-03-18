import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutReviewInput } from './book-create-without-review.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutReviewInput } from './book-create-or-connect-without-review.input';
import { bookUpsertWithoutReviewInput } from './book-upsert-without-review.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { bookUpdateToOneWithWhereWithoutReviewInput } from './book-update-to-one-with-where-without-review.input';

@InputType()
export class bookUpdateOneRequiredWithoutReviewNestedInput {

    @Field(() => bookCreateWithoutReviewInput, {nullable:true})
    @Type(() => bookCreateWithoutReviewInput)
    create?: bookCreateWithoutReviewInput;

    @Field(() => bookCreateOrConnectWithoutReviewInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutReviewInput)
    connectOrCreate?: bookCreateOrConnectWithoutReviewInput;

    @Field(() => bookUpsertWithoutReviewInput, {nullable:true})
    @Type(() => bookUpsertWithoutReviewInput)
    upsert?: bookUpsertWithoutReviewInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateToOneWithWhereWithoutReviewInput, {nullable:true})
    @Type(() => bookUpdateToOneWithWhereWithoutReviewInput)
    update?: bookUpdateToOneWithWhereWithoutReviewInput;
}

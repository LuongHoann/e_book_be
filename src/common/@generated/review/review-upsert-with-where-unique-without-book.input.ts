import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { reviewUpdateWithoutBookInput } from './review-update-without-book.input';
import { reviewCreateWithoutBookInput } from './review-create-without-book.input';

@InputType()
export class reviewUpsertWithWhereUniqueWithoutBookInput {

    @Field(() => reviewWhereUniqueInput, {nullable:false})
    @Type(() => reviewWhereUniqueInput)
    where!: Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => reviewUpdateWithoutBookInput, {nullable:false})
    @Type(() => reviewUpdateWithoutBookInput)
    update!: reviewUpdateWithoutBookInput;

    @Field(() => reviewCreateWithoutBookInput, {nullable:false})
    @Type(() => reviewCreateWithoutBookInput)
    create!: reviewCreateWithoutBookInput;
}

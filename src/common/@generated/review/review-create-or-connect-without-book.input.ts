import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { reviewCreateWithoutBookInput } from './review-create-without-book.input';

@InputType()
export class reviewCreateOrConnectWithoutBookInput {

    @Field(() => reviewWhereUniqueInput, {nullable:false})
    @Type(() => reviewWhereUniqueInput)
    where!: Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => reviewCreateWithoutBookInput, {nullable:false})
    @Type(() => reviewCreateWithoutBookInput)
    create!: reviewCreateWithoutBookInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { book_discountWhereUniqueInput } from './book-discount-where-unique.input';
import { Type } from 'class-transformer';
import { book_discountCreateWithoutBookInput } from './book-discount-create-without-book.input';

@InputType()
export class book_discountCreateOrConnectWithoutBookInput {

    @Field(() => book_discountWhereUniqueInput, {nullable:false})
    @Type(() => book_discountWhereUniqueInput)
    where!: Prisma.AtLeast<book_discountWhereUniqueInput, 'book_id_discount_id'>;

    @Field(() => book_discountCreateWithoutBookInput, {nullable:false})
    @Type(() => book_discountCreateWithoutBookInput)
    create!: book_discountCreateWithoutBookInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { book_discountWhereUniqueInput } from './book-discount-where-unique.input';
import { Type } from 'class-transformer';
import { book_discountUpdateWithoutBookInput } from './book-discount-update-without-book.input';

@InputType()
export class book_discountUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => book_discountWhereUniqueInput, {nullable:false})
    @Type(() => book_discountWhereUniqueInput)
    where!: Prisma.AtLeast<book_discountWhereUniqueInput, 'book_id_discount_id'>;

    @Field(() => book_discountUpdateWithoutBookInput, {nullable:false})
    @Type(() => book_discountUpdateWithoutBookInput)
    data!: book_discountUpdateWithoutBookInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { book_discountWhereUniqueInput } from './book-discount-where-unique.input';
import { Type } from 'class-transformer';
import { book_discountCreateWithoutDiscount_codeInput } from './book-discount-create-without-discount-code.input';

@InputType()
export class book_discountCreateOrConnectWithoutDiscount_codeInput {

    @Field(() => book_discountWhereUniqueInput, {nullable:false})
    @Type(() => book_discountWhereUniqueInput)
    where!: Prisma.AtLeast<book_discountWhereUniqueInput, 'book_id_discount_id'>;

    @Field(() => book_discountCreateWithoutDiscount_codeInput, {nullable:false})
    @Type(() => book_discountCreateWithoutDiscount_codeInput)
    create!: book_discountCreateWithoutDiscount_codeInput;
}

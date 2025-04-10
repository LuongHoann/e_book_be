import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountCreateWithoutBookInput } from './book-discount-create-without-book.input';
import { Type } from 'class-transformer';
import { book_discountCreateOrConnectWithoutBookInput } from './book-discount-create-or-connect-without-book.input';
import { book_discountCreateManyBookInputEnvelope } from './book-discount-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { book_discountWhereUniqueInput } from './book-discount-where-unique.input';

@InputType()
export class book_discountUncheckedCreateNestedManyWithoutBookInput {

    @Field(() => [book_discountCreateWithoutBookInput], {nullable:true})
    @Type(() => book_discountCreateWithoutBookInput)
    create?: Array<book_discountCreateWithoutBookInput>;

    @Field(() => [book_discountCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => book_discountCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<book_discountCreateOrConnectWithoutBookInput>;

    @Field(() => book_discountCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => book_discountCreateManyBookInputEnvelope)
    createMany?: book_discountCreateManyBookInputEnvelope;

    @Field(() => [book_discountWhereUniqueInput], {nullable:true})
    @Type(() => book_discountWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<book_discountWhereUniqueInput, 'book_id_discount_id'>>;
}

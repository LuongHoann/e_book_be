import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountCreateWithoutDiscount_codeInput } from './book-discount-create-without-discount-code.input';
import { Type } from 'class-transformer';
import { book_discountCreateOrConnectWithoutDiscount_codeInput } from './book-discount-create-or-connect-without-discount-code.input';
import { book_discountCreateManyDiscount_codeInputEnvelope } from './book-discount-create-many-discount-code-input-envelope.input';
import { Prisma } from '@prisma/client';
import { book_discountWhereUniqueInput } from './book-discount-where-unique.input';

@InputType()
export class book_discountUncheckedCreateNestedManyWithoutDiscount_codeInput {

    @Field(() => [book_discountCreateWithoutDiscount_codeInput], {nullable:true})
    @Type(() => book_discountCreateWithoutDiscount_codeInput)
    create?: Array<book_discountCreateWithoutDiscount_codeInput>;

    @Field(() => [book_discountCreateOrConnectWithoutDiscount_codeInput], {nullable:true})
    @Type(() => book_discountCreateOrConnectWithoutDiscount_codeInput)
    connectOrCreate?: Array<book_discountCreateOrConnectWithoutDiscount_codeInput>;

    @Field(() => book_discountCreateManyDiscount_codeInputEnvelope, {nullable:true})
    @Type(() => book_discountCreateManyDiscount_codeInputEnvelope)
    createMany?: book_discountCreateManyDiscount_codeInputEnvelope;

    @Field(() => [book_discountWhereUniqueInput], {nullable:true})
    @Type(() => book_discountWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<book_discountWhereUniqueInput, 'book_id_discount_id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountCreateWithoutBookInput } from './book-discount-create-without-book.input';
import { Type } from 'class-transformer';
import { book_discountCreateOrConnectWithoutBookInput } from './book-discount-create-or-connect-without-book.input';
import { book_discountUpsertWithWhereUniqueWithoutBookInput } from './book-discount-upsert-with-where-unique-without-book.input';
import { book_discountCreateManyBookInputEnvelope } from './book-discount-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { book_discountWhereUniqueInput } from './book-discount-where-unique.input';
import { book_discountUpdateWithWhereUniqueWithoutBookInput } from './book-discount-update-with-where-unique-without-book.input';
import { book_discountUpdateManyWithWhereWithoutBookInput } from './book-discount-update-many-with-where-without-book.input';
import { book_discountScalarWhereInput } from './book-discount-scalar-where.input';

@InputType()
export class book_discountUncheckedUpdateManyWithoutBookNestedInput {

    @Field(() => [book_discountCreateWithoutBookInput], {nullable:true})
    @Type(() => book_discountCreateWithoutBookInput)
    create?: Array<book_discountCreateWithoutBookInput>;

    @Field(() => [book_discountCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => book_discountCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<book_discountCreateOrConnectWithoutBookInput>;

    @Field(() => [book_discountUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => book_discountUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<book_discountUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => book_discountCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => book_discountCreateManyBookInputEnvelope)
    createMany?: book_discountCreateManyBookInputEnvelope;

    @Field(() => [book_discountWhereUniqueInput], {nullable:true})
    @Type(() => book_discountWhereUniqueInput)
    set?: Array<Prisma.AtLeast<book_discountWhereUniqueInput, 'book_id_discount_id'>>;

    @Field(() => [book_discountWhereUniqueInput], {nullable:true})
    @Type(() => book_discountWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<book_discountWhereUniqueInput, 'book_id_discount_id'>>;

    @Field(() => [book_discountWhereUniqueInput], {nullable:true})
    @Type(() => book_discountWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<book_discountWhereUniqueInput, 'book_id_discount_id'>>;

    @Field(() => [book_discountWhereUniqueInput], {nullable:true})
    @Type(() => book_discountWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<book_discountWhereUniqueInput, 'book_id_discount_id'>>;

    @Field(() => [book_discountUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => book_discountUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<book_discountUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [book_discountUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => book_discountUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<book_discountUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [book_discountScalarWhereInput], {nullable:true})
    @Type(() => book_discountScalarWhereInput)
    deleteMany?: Array<book_discountScalarWhereInput>;
}

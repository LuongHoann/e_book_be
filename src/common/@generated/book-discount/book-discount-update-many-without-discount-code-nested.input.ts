import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountCreateWithoutDiscount_codeInput } from './book-discount-create-without-discount-code.input';
import { Type } from 'class-transformer';
import { book_discountCreateOrConnectWithoutDiscount_codeInput } from './book-discount-create-or-connect-without-discount-code.input';
import { book_discountUpsertWithWhereUniqueWithoutDiscount_codeInput } from './book-discount-upsert-with-where-unique-without-discount-code.input';
import { book_discountCreateManyDiscount_codeInputEnvelope } from './book-discount-create-many-discount-code-input-envelope.input';
import { Prisma } from '@prisma/client';
import { book_discountWhereUniqueInput } from './book-discount-where-unique.input';
import { book_discountUpdateWithWhereUniqueWithoutDiscount_codeInput } from './book-discount-update-with-where-unique-without-discount-code.input';
import { book_discountUpdateManyWithWhereWithoutDiscount_codeInput } from './book-discount-update-many-with-where-without-discount-code.input';
import { book_discountScalarWhereInput } from './book-discount-scalar-where.input';

@InputType()
export class book_discountUpdateManyWithoutDiscount_codeNestedInput {

    @Field(() => [book_discountCreateWithoutDiscount_codeInput], {nullable:true})
    @Type(() => book_discountCreateWithoutDiscount_codeInput)
    create?: Array<book_discountCreateWithoutDiscount_codeInput>;

    @Field(() => [book_discountCreateOrConnectWithoutDiscount_codeInput], {nullable:true})
    @Type(() => book_discountCreateOrConnectWithoutDiscount_codeInput)
    connectOrCreate?: Array<book_discountCreateOrConnectWithoutDiscount_codeInput>;

    @Field(() => [book_discountUpsertWithWhereUniqueWithoutDiscount_codeInput], {nullable:true})
    @Type(() => book_discountUpsertWithWhereUniqueWithoutDiscount_codeInput)
    upsert?: Array<book_discountUpsertWithWhereUniqueWithoutDiscount_codeInput>;

    @Field(() => book_discountCreateManyDiscount_codeInputEnvelope, {nullable:true})
    @Type(() => book_discountCreateManyDiscount_codeInputEnvelope)
    createMany?: book_discountCreateManyDiscount_codeInputEnvelope;

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

    @Field(() => [book_discountUpdateWithWhereUniqueWithoutDiscount_codeInput], {nullable:true})
    @Type(() => book_discountUpdateWithWhereUniqueWithoutDiscount_codeInput)
    update?: Array<book_discountUpdateWithWhereUniqueWithoutDiscount_codeInput>;

    @Field(() => [book_discountUpdateManyWithWhereWithoutDiscount_codeInput], {nullable:true})
    @Type(() => book_discountUpdateManyWithWhereWithoutDiscount_codeInput)
    updateMany?: Array<book_discountUpdateManyWithWhereWithoutDiscount_codeInput>;

    @Field(() => [book_discountScalarWhereInput], {nullable:true})
    @Type(() => book_discountScalarWhereInput)
    deleteMany?: Array<book_discountScalarWhereInput>;
}

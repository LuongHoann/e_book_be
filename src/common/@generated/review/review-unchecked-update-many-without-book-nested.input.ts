import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reviewCreateWithoutBookInput } from './review-create-without-book.input';
import { Type } from 'class-transformer';
import { reviewCreateOrConnectWithoutBookInput } from './review-create-or-connect-without-book.input';
import { reviewUpsertWithWhereUniqueWithoutBookInput } from './review-upsert-with-where-unique-without-book.input';
import { reviewCreateManyBookInputEnvelope } from './review-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';
import { reviewUpdateWithWhereUniqueWithoutBookInput } from './review-update-with-where-unique-without-book.input';
import { reviewUpdateManyWithWhereWithoutBookInput } from './review-update-many-with-where-without-book.input';
import { reviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class reviewUncheckedUpdateManyWithoutBookNestedInput {

    @Field(() => [reviewCreateWithoutBookInput], {nullable:true})
    @Type(() => reviewCreateWithoutBookInput)
    create?: Array<reviewCreateWithoutBookInput>;

    @Field(() => [reviewCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => reviewCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<reviewCreateOrConnectWithoutBookInput>;

    @Field(() => [reviewUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => reviewUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<reviewUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => reviewCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => reviewCreateManyBookInputEnvelope)
    createMany?: reviewCreateManyBookInputEnvelope;

    @Field(() => [reviewWhereUniqueInput], {nullable:true})
    @Type(() => reviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reviewWhereUniqueInput], {nullable:true})
    @Type(() => reviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reviewWhereUniqueInput], {nullable:true})
    @Type(() => reviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reviewWhereUniqueInput], {nullable:true})
    @Type(() => reviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reviewUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => reviewUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<reviewUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [reviewUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => reviewUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<reviewUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [reviewScalarWhereInput], {nullable:true})
    @Type(() => reviewScalarWhereInput)
    deleteMany?: Array<reviewScalarWhereInput>;
}

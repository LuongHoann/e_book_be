import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reviewCreateWithoutBookInput } from './review-create-without-book.input';
import { Type } from 'class-transformer';
import { reviewCreateOrConnectWithoutBookInput } from './review-create-or-connect-without-book.input';
import { reviewCreateManyBookInputEnvelope } from './review-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class reviewUncheckedCreateNestedManyWithoutBookInput {

    @Field(() => [reviewCreateWithoutBookInput], {nullable:true})
    @Type(() => reviewCreateWithoutBookInput)
    create?: Array<reviewCreateWithoutBookInput>;

    @Field(() => [reviewCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => reviewCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<reviewCreateOrConnectWithoutBookInput>;

    @Field(() => reviewCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => reviewCreateManyBookInputEnvelope)
    createMany?: reviewCreateManyBookInputEnvelope;

    @Field(() => [reviewWhereUniqueInput], {nullable:true})
    @Type(() => reviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>>;
}

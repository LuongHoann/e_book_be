import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reviewCreateWithoutUserInput } from './review-create-without-user.input';
import { Type } from 'class-transformer';
import { reviewCreateOrConnectWithoutUserInput } from './review-create-or-connect-without-user.input';
import { reviewUpsertWithWhereUniqueWithoutUserInput } from './review-upsert-with-where-unique-without-user.input';
import { reviewCreateManyUserInputEnvelope } from './review-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';
import { reviewUpdateWithWhereUniqueWithoutUserInput } from './review-update-with-where-unique-without-user.input';
import { reviewUpdateManyWithWhereWithoutUserInput } from './review-update-many-with-where-without-user.input';
import { reviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class reviewUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [reviewCreateWithoutUserInput], {nullable:true})
    @Type(() => reviewCreateWithoutUserInput)
    create?: Array<reviewCreateWithoutUserInput>;

    @Field(() => [reviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => reviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<reviewCreateOrConnectWithoutUserInput>;

    @Field(() => [reviewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => reviewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<reviewUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => reviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => reviewCreateManyUserInputEnvelope)
    createMany?: reviewCreateManyUserInputEnvelope;

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

    @Field(() => [reviewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => reviewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<reviewUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [reviewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => reviewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<reviewUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [reviewScalarWhereInput], {nullable:true})
    @Type(() => reviewScalarWhereInput)
    deleteMany?: Array<reviewScalarWhereInput>;
}

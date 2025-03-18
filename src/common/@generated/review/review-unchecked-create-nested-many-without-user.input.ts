import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reviewCreateWithoutUserInput } from './review-create-without-user.input';
import { Type } from 'class-transformer';
import { reviewCreateOrConnectWithoutUserInput } from './review-create-or-connect-without-user.input';
import { reviewCreateManyUserInputEnvelope } from './review-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class reviewUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [reviewCreateWithoutUserInput], {nullable:true})
    @Type(() => reviewCreateWithoutUserInput)
    create?: Array<reviewCreateWithoutUserInput>;

    @Field(() => [reviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => reviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<reviewCreateOrConnectWithoutUserInput>;

    @Field(() => reviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => reviewCreateManyUserInputEnvelope)
    createMany?: reviewCreateManyUserInputEnvelope;

    @Field(() => [reviewWhereUniqueInput], {nullable:true})
    @Type(() => reviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>>;
}

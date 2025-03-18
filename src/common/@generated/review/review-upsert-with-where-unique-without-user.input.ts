import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { reviewUpdateWithoutUserInput } from './review-update-without-user.input';
import { reviewCreateWithoutUserInput } from './review-create-without-user.input';

@InputType()
export class reviewUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => reviewWhereUniqueInput, {nullable:false})
    @Type(() => reviewWhereUniqueInput)
    where!: Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => reviewUpdateWithoutUserInput, {nullable:false})
    @Type(() => reviewUpdateWithoutUserInput)
    update!: reviewUpdateWithoutUserInput;

    @Field(() => reviewCreateWithoutUserInput, {nullable:false})
    @Type(() => reviewCreateWithoutUserInput)
    create!: reviewCreateWithoutUserInput;
}

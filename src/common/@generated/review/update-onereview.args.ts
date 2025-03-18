import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reviewUpdateInput } from './review-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';

@ArgsType()
export class UpdateOnereviewArgs {

    @Field(() => reviewUpdateInput, {nullable:false})
    @Type(() => reviewUpdateInput)
    data!: reviewUpdateInput;

    @Field(() => reviewWhereUniqueInput, {nullable:false})
    @Type(() => reviewWhereUniqueInput)
    where!: Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>;
}

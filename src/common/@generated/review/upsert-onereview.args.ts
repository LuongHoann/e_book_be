import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { reviewCreateInput } from './review-create.input';
import { reviewUpdateInput } from './review-update.input';

@ArgsType()
export class UpsertOnereviewArgs {

    @Field(() => reviewWhereUniqueInput, {nullable:false})
    @Type(() => reviewWhereUniqueInput)
    where!: Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => reviewCreateInput, {nullable:false})
    @Type(() => reviewCreateInput)
    create!: reviewCreateInput;

    @Field(() => reviewUpdateInput, {nullable:false})
    @Type(() => reviewUpdateInput)
    update!: reviewUpdateInput;
}

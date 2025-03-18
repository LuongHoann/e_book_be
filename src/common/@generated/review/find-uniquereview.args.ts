import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquereviewArgs {

    @Field(() => reviewWhereUniqueInput, {nullable:false})
    @Type(() => reviewWhereUniqueInput)
    where!: Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>;
}

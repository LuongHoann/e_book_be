import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { commentUpdateInput } from './comment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class UpdateOnecommentArgs {

    @Field(() => commentUpdateInput, {nullable:false})
    @Type(() => commentUpdateInput)
    data!: commentUpdateInput;

    @Field(() => commentWhereUniqueInput, {nullable:false})
    @Type(() => commentWhereUniqueInput)
    where!: Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>;
}

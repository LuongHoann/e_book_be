import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { commentCreateInput } from './comment-create.input';
import { commentUpdateInput } from './comment-update.input';

@ArgsType()
export class UpsertOnecommentArgs {

    @Field(() => commentWhereUniqueInput, {nullable:false})
    @Type(() => commentWhereUniqueInput)
    where!: Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => commentCreateInput, {nullable:false})
    @Type(() => commentCreateInput)
    create!: commentCreateInput;

    @Field(() => commentUpdateInput, {nullable:false})
    @Type(() => commentUpdateInput)
    update!: commentUpdateInput;
}

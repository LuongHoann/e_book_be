import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { commentUpdateWithoutBookInput } from './comment-update-without-book.input';

@InputType()
export class commentUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => commentWhereUniqueInput, {nullable:false})
    @Type(() => commentWhereUniqueInput)
    where!: Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => commentUpdateWithoutBookInput, {nullable:false})
    @Type(() => commentUpdateWithoutBookInput)
    data!: commentUpdateWithoutBookInput;
}

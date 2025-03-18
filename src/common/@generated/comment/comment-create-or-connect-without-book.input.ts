import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { commentCreateWithoutBookInput } from './comment-create-without-book.input';

@InputType()
export class commentCreateOrConnectWithoutBookInput {

    @Field(() => commentWhereUniqueInput, {nullable:false})
    @Type(() => commentWhereUniqueInput)
    where!: Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => commentCreateWithoutBookInput, {nullable:false})
    @Type(() => commentCreateWithoutBookInput)
    create!: commentCreateWithoutBookInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutCommentInput } from './book-create-without-comment.input';

@InputType()
export class bookCreateOrConnectWithoutCommentInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutCommentInput, {nullable:false})
    @Type(() => bookCreateWithoutCommentInput)
    create!: bookCreateWithoutCommentInput;
}

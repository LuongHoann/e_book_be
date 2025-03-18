import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutCommentInput } from './book-create-without-comment.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutCommentInput } from './book-create-or-connect-without-comment.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookCreateNestedOneWithoutCommentInput {

    @Field(() => bookCreateWithoutCommentInput, {nullable:true})
    @Type(() => bookCreateWithoutCommentInput)
    create?: bookCreateWithoutCommentInput;

    @Field(() => bookCreateOrConnectWithoutCommentInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutCommentInput)
    connectOrCreate?: bookCreateOrConnectWithoutCommentInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}

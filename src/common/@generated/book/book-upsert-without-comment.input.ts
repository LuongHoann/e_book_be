import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutCommentInput } from './book-update-without-comment.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutCommentInput } from './book-create-without-comment.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutCommentInput {

    @Field(() => bookUpdateWithoutCommentInput, {nullable:false})
    @Type(() => bookUpdateWithoutCommentInput)
    update!: bookUpdateWithoutCommentInput;

    @Field(() => bookCreateWithoutCommentInput, {nullable:false})
    @Type(() => bookCreateWithoutCommentInput)
    create!: bookCreateWithoutCommentInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutCommentInput } from '../book/book-create-nested-one-without-comment.input';
import { Type } from 'class-transformer';

@InputType()
export class commentCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => bookCreateNestedOneWithoutCommentInput, {nullable:false})
    @Type(() => bookCreateNestedOneWithoutCommentInput)
    book!: bookCreateNestedOneWithoutCommentInput;
}

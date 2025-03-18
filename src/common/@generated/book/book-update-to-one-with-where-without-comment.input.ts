import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutCommentInput } from './book-update-without-comment.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutCommentInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutCommentInput, {nullable:false})
    @Type(() => bookUpdateWithoutCommentInput)
    data!: bookUpdateWithoutCommentInput;
}

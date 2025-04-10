import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutCommentInput } from '../book/book-create-nested-one-without-comment.input';
import { userCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';

@InputType()
export class commentCreateInput {

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => bookCreateNestedOneWithoutCommentInput, {nullable:false})
    book!: bookCreateNestedOneWithoutCommentInput;

    @Field(() => userCreateNestedOneWithoutCommentInput, {nullable:false})
    user!: userCreateNestedOneWithoutCommentInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';

@InputType()
export class commentCreateWithoutBookInput {

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => userCreateNestedOneWithoutCommentInput, {nullable:false})
    user!: userCreateNestedOneWithoutCommentInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { bookUpdateOneRequiredWithoutCommentNestedInput } from '../book/book-update-one-required-without-comment-nested.input';
import { userUpdateOneRequiredWithoutCommentNestedInput } from '../user/user-update-one-required-without-comment-nested.input';

@InputType()
export class commentUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => bookUpdateOneRequiredWithoutCommentNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutCommentNestedInput;

    @Field(() => userUpdateOneRequiredWithoutCommentNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutCommentNestedInput;
}

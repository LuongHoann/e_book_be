import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { bookUpdateOneRequiredWithoutCommentNestedInput } from '../book/book-update-one-required-without-comment-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class commentUpdateWithoutUserInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => bookUpdateOneRequiredWithoutCommentNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutCommentNestedInput)
    book?: bookUpdateOneRequiredWithoutCommentNestedInput;
}

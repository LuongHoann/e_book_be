import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { bookUpdateOneRequiredWithoutReviewNestedInput } from '../book/book-update-one-required-without-review-nested.input';

@InputType()
export class reviewUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rating?: IntFieldUpdateOperationsInput;

    @Field(() => bookUpdateOneRequiredWithoutReviewNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutReviewNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { bookUpdateOneRequiredWithoutReviewNestedInput } from '../book/book-update-one-required-without-review-nested.input';
import { Type } from 'class-transformer';
import { userUpdateOneRequiredWithoutReviewNestedInput } from '../user/user-update-one-required-without-review-nested.input';

@InputType()
export class reviewUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rating?: IntFieldUpdateOperationsInput;

    @Field(() => bookUpdateOneRequiredWithoutReviewNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutReviewNestedInput)
    book?: bookUpdateOneRequiredWithoutReviewNestedInput;

    @Field(() => userUpdateOneRequiredWithoutReviewNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { userUpdateOneRequiredWithoutReviewNestedInput } from '../user/user-update-one-required-without-review-nested.input';

@InputType()
export class reviewUpdateWithoutBookInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rating?: IntFieldUpdateOperationsInput;

    @Field(() => userUpdateOneRequiredWithoutReviewNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
}

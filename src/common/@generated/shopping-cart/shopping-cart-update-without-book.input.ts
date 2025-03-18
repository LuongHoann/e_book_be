import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateOneRequiredWithoutShopping_cartNestedInput } from '../user/user-update-one-required-without-shopping-cart-nested.input';

@InputType()
export class shopping_cartUpdateWithoutBookInput {

    @Field(() => userUpdateOneRequiredWithoutShopping_cartNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutShopping_cartNestedInput;
}

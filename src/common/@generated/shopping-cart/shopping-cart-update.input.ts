import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutShopping_cartNestedInput } from '../book/book-update-one-required-without-shopping-cart-nested.input';
import { Type } from 'class-transformer';
import { userUpdateOneRequiredWithoutShopping_cartNestedInput } from '../user/user-update-one-required-without-shopping-cart-nested.input';

@InputType()
export class shopping_cartUpdateInput {

    @Field(() => bookUpdateOneRequiredWithoutShopping_cartNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutShopping_cartNestedInput)
    book?: bookUpdateOneRequiredWithoutShopping_cartNestedInput;

    @Field(() => userUpdateOneRequiredWithoutShopping_cartNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutShopping_cartNestedInput;
}

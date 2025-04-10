import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutShopping_cartNestedInput } from '../book/book-update-one-required-without-shopping-cart-nested.input';

@InputType()
export class shopping_cartUpdateWithoutUserInput {

    @Field(() => bookUpdateOneRequiredWithoutShopping_cartNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutShopping_cartNestedInput;
}

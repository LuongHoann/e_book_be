import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutShopping_cartNestedInput } from '../book/book-update-one-required-without-shopping-cart-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class shopping_cartUpdateWithoutUserInput {

    @Field(() => bookUpdateOneRequiredWithoutShopping_cartNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutShopping_cartNestedInput)
    book?: bookUpdateOneRequiredWithoutShopping_cartNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutShopping_cartInput } from '../book/book-create-nested-one-without-shopping-cart.input';
import { Type } from 'class-transformer';

@InputType()
export class shopping_cartCreateWithoutUserInput {

    @Field(() => bookCreateNestedOneWithoutShopping_cartInput, {nullable:false})
    @Type(() => bookCreateNestedOneWithoutShopping_cartInput)
    book!: bookCreateNestedOneWithoutShopping_cartInput;
}

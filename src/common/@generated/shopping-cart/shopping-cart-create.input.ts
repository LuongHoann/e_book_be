import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutShopping_cartInput } from '../book/book-create-nested-one-without-shopping-cart.input';
import { userCreateNestedOneWithoutShopping_cartInput } from '../user/user-create-nested-one-without-shopping-cart.input';

@InputType()
export class shopping_cartCreateInput {

    @Field(() => bookCreateNestedOneWithoutShopping_cartInput, {nullable:false})
    book!: bookCreateNestedOneWithoutShopping_cartInput;

    @Field(() => userCreateNestedOneWithoutShopping_cartInput, {nullable:false})
    user!: userCreateNestedOneWithoutShopping_cartInput;
}

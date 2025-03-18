import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutShopping_cartInput } from '../book/book-create-nested-one-without-shopping-cart.input';
import { Type } from 'class-transformer';
import { userCreateNestedOneWithoutShopping_cartInput } from '../user/user-create-nested-one-without-shopping-cart.input';

@InputType()
export class shopping_cartCreateInput {

    @Field(() => bookCreateNestedOneWithoutShopping_cartInput, {nullable:false})
    @Type(() => bookCreateNestedOneWithoutShopping_cartInput)
    book!: bookCreateNestedOneWithoutShopping_cartInput;

    @Field(() => userCreateNestedOneWithoutShopping_cartInput, {nullable:false})
    user!: userCreateNestedOneWithoutShopping_cartInput;
}

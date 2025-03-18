import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateNestedOneWithoutShopping_cartInput } from '../user/user-create-nested-one-without-shopping-cart.input';

@InputType()
export class shopping_cartCreateWithoutBookInput {

    @Field(() => userCreateNestedOneWithoutShopping_cartInput, {nullable:false})
    user!: userCreateNestedOneWithoutShopping_cartInput;
}

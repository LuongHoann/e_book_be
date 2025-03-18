import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartWhereInput } from '../shopping-cart/shopping-cart-where.input';

@InputType()
export class Shopping_cartListRelationFilter {

    @Field(() => shopping_cartWhereInput, {nullable:true})
    every?: shopping_cartWhereInput;

    @Field(() => shopping_cartWhereInput, {nullable:true})
    some?: shopping_cartWhereInput;

    @Field(() => shopping_cartWhereInput, {nullable:true})
    none?: shopping_cartWhereInput;
}

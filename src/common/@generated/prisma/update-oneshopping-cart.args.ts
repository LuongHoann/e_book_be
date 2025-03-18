import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { shopping_cartUpdateInput } from '../shopping-cart/shopping-cart-update.input';
import { Type } from 'class-transformer';
import { shopping_cartWhereUniqueInput } from '../shopping-cart/shopping-cart-where-unique.input';

@ArgsType()
export class UpdateOneshoppingCartArgs {

    @Field(() => shopping_cartUpdateInput, {nullable:false})
    @Type(() => shopping_cartUpdateInput)
    data!: shopping_cartUpdateInput;

    @Field(() => shopping_cartWhereUniqueInput, {nullable:false})
    @Type(() => shopping_cartWhereUniqueInput)
    where!: shopping_cartWhereUniqueInput;
}

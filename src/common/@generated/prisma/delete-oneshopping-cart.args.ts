import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { shopping_cartWhereUniqueInput } from '../shopping-cart/shopping-cart-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneshoppingCartArgs {

    @Field(() => shopping_cartWhereUniqueInput, {nullable:false})
    @Type(() => shopping_cartWhereUniqueInput)
    where!: shopping_cartWhereUniqueInput;
}

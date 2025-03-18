import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { shopping_cartCreateInput } from '../shopping-cart/shopping-cart-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneshoppingCartArgs {

    @Field(() => shopping_cartCreateInput, {nullable:false})
    @Type(() => shopping_cartCreateInput)
    data!: shopping_cartCreateInput;
}

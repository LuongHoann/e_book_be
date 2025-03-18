import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { shopping_cartUncheckedUpdateManyInput } from '../shopping-cart/shopping-cart-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { shopping_cartWhereInput } from '../shopping-cart/shopping-cart-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyshoppingCartArgs {

    @Field(() => shopping_cartUncheckedUpdateManyInput, {nullable:false})
    @Type(() => shopping_cartUncheckedUpdateManyInput)
    data!: shopping_cartUncheckedUpdateManyInput;

    @Field(() => shopping_cartWhereInput, {nullable:true})
    @Type(() => shopping_cartWhereInput)
    where?: shopping_cartWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

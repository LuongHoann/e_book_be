import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { shopping_cartWhereInput } from '../shopping-cart/shopping-cart-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyshoppingCartArgs {

    @Field(() => shopping_cartWhereInput, {nullable:true})
    @Type(() => shopping_cartWhereInput)
    where?: shopping_cartWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

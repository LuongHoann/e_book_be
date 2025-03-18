import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { shopping_cartWhereInput } from '../shopping-cart/shopping-cart-where.input';
import { Type } from 'class-transformer';
import { shopping_cartOrderByWithRelationInput } from '../shopping-cart/shopping-cart-order-by-with-relation.input';
import { shopping_cartWhereUniqueInput } from '../shopping-cart/shopping-cart-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Shopping_cartScalarFieldEnum } from './shopping-cart-scalar-field.enum';

@ArgsType()
export class FindManyshoppingCartArgs {

    @Field(() => shopping_cartWhereInput, {nullable:true})
    @Type(() => shopping_cartWhereInput)
    where?: shopping_cartWhereInput;

    @Field(() => [shopping_cartOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<shopping_cartOrderByWithRelationInput>;

    @Field(() => shopping_cartWhereUniqueInput, {nullable:true})
    cursor?: shopping_cartWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Shopping_cartScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Shopping_cartScalarFieldEnum}`>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { shopping_cartWhereInput } from '../shopping-cart/shopping-cart-where.input';
import { Type } from 'class-transformer';
import { shopping_cartOrderByWithAggregationInput } from '../shopping-cart/shopping-cart-order-by-with-aggregation.input';
import { Shopping_cartScalarFieldEnum } from './shopping-cart-scalar-field.enum';
import { shopping_cartScalarWhereWithAggregatesInput } from '../shopping-cart/shopping-cart-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByshoppingCartArgs {

    @Field(() => shopping_cartWhereInput, {nullable:true})
    @Type(() => shopping_cartWhereInput)
    where?: shopping_cartWhereInput;

    @Field(() => [shopping_cartOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<shopping_cartOrderByWithAggregationInput>;

    @Field(() => [Shopping_cartScalarFieldEnum], {nullable:false})
    by!: Array<`${Shopping_cartScalarFieldEnum}`>;

    @Field(() => shopping_cartScalarWhereWithAggregatesInput, {nullable:true})
    having?: shopping_cartScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { shopping_cartWhereUniqueInput } from '../shopping-cart/shopping-cart-where-unique.input';
import { Type } from 'class-transformer';
import { shopping_cartCreateInput } from '../shopping-cart/shopping-cart-create.input';
import { shopping_cartUpdateInput } from '../shopping-cart/shopping-cart-update.input';

@ArgsType()
export class UpsertOneshoppingCartArgs {

    @Field(() => shopping_cartWhereUniqueInput, {nullable:false})
    @Type(() => shopping_cartWhereUniqueInput)
    where!: shopping_cartWhereUniqueInput;

    @Field(() => shopping_cartCreateInput, {nullable:false})
    @Type(() => shopping_cartCreateInput)
    create!: shopping_cartCreateInput;

    @Field(() => shopping_cartUpdateInput, {nullable:false})
    @Type(() => shopping_cartUpdateInput)
    update!: shopping_cartUpdateInput;
}

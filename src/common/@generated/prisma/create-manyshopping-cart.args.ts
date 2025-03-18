import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { shopping_cartCreateManyInput } from '../shopping-cart/shopping-cart-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyshoppingCartArgs {

    @Field(() => [shopping_cartCreateManyInput], {nullable:false})
    @Type(() => shopping_cartCreateManyInput)
    data!: Array<shopping_cartCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

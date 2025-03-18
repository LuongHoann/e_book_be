import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutShopping_cartInput } from './book-update-without-shopping-cart.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutShopping_cartInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutShopping_cartInput, {nullable:false})
    @Type(() => bookUpdateWithoutShopping_cartInput)
    data!: bookUpdateWithoutShopping_cartInput;
}

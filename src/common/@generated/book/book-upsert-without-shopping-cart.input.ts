import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutShopping_cartInput } from './book-update-without-shopping-cart.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutShopping_cartInput } from './book-create-without-shopping-cart.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutShopping_cartInput {

    @Field(() => bookUpdateWithoutShopping_cartInput, {nullable:false})
    @Type(() => bookUpdateWithoutShopping_cartInput)
    update!: bookUpdateWithoutShopping_cartInput;

    @Field(() => bookCreateWithoutShopping_cartInput, {nullable:false})
    @Type(() => bookCreateWithoutShopping_cartInput)
    create!: bookCreateWithoutShopping_cartInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { shopping_cartWhereUniqueInput } from './shopping-cart-where-unique.input';
import { Type } from 'class-transformer';
import { shopping_cartUpdateWithoutBookInput } from './shopping-cart-update-without-book.input';

@InputType()
export class shopping_cartUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => shopping_cartWhereUniqueInput, {nullable:false})
    @Type(() => shopping_cartWhereUniqueInput)
    where!: Prisma.AtLeast<shopping_cartWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => shopping_cartUpdateWithoutBookInput, {nullable:false})
    @Type(() => shopping_cartUpdateWithoutBookInput)
    data!: shopping_cartUpdateWithoutBookInput;
}

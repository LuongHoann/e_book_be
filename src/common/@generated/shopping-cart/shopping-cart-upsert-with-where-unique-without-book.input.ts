import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { shopping_cartWhereUniqueInput } from './shopping-cart-where-unique.input';
import { Type } from 'class-transformer';
import { shopping_cartUpdateWithoutBookInput } from './shopping-cart-update-without-book.input';
import { shopping_cartCreateWithoutBookInput } from './shopping-cart-create-without-book.input';

@InputType()
export class shopping_cartUpsertWithWhereUniqueWithoutBookInput {

    @Field(() => shopping_cartWhereUniqueInput, {nullable:false})
    @Type(() => shopping_cartWhereUniqueInput)
    where!: Prisma.AtLeast<shopping_cartWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => shopping_cartUpdateWithoutBookInput, {nullable:false})
    @Type(() => shopping_cartUpdateWithoutBookInput)
    update!: shopping_cartUpdateWithoutBookInput;

    @Field(() => shopping_cartCreateWithoutBookInput, {nullable:false})
    @Type(() => shopping_cartCreateWithoutBookInput)
    create!: shopping_cartCreateWithoutBookInput;
}

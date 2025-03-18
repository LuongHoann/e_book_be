import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { shopping_cartWhereUniqueInput } from './shopping-cart-where-unique.input';
import { Type } from 'class-transformer';
import { shopping_cartCreateWithoutUserInput } from './shopping-cart-create-without-user.input';

@InputType()
export class shopping_cartCreateOrConnectWithoutUserInput {

    @Field(() => shopping_cartWhereUniqueInput, {nullable:false})
    @Type(() => shopping_cartWhereUniqueInput)
    where!: Prisma.AtLeast<shopping_cartWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => shopping_cartCreateWithoutUserInput, {nullable:false})
    @Type(() => shopping_cartCreateWithoutUserInput)
    create!: shopping_cartCreateWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutShopping_cartInput } from './book-create-without-shopping-cart.input';

@InputType()
export class bookCreateOrConnectWithoutShopping_cartInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutShopping_cartInput, {nullable:false})
    @Type(() => bookCreateWithoutShopping_cartInput)
    create!: bookCreateWithoutShopping_cartInput;
}

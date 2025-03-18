import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutShopping_cartInput } from './book-create-without-shopping-cart.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutShopping_cartInput } from './book-create-or-connect-without-shopping-cart.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookCreateNestedOneWithoutShopping_cartInput {

    @Field(() => bookCreateWithoutShopping_cartInput, {nullable:true})
    @Type(() => bookCreateWithoutShopping_cartInput)
    create?: bookCreateWithoutShopping_cartInput;

    @Field(() => bookCreateOrConnectWithoutShopping_cartInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutShopping_cartInput)
    connectOrCreate?: bookCreateOrConnectWithoutShopping_cartInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}

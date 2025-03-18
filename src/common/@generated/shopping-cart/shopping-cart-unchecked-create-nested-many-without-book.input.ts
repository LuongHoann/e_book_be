import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartCreateWithoutBookInput } from './shopping-cart-create-without-book.input';
import { Type } from 'class-transformer';
import { shopping_cartCreateOrConnectWithoutBookInput } from './shopping-cart-create-or-connect-without-book.input';
import { shopping_cartCreateManyBookInputEnvelope } from './shopping-cart-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { shopping_cartWhereUniqueInput } from './shopping-cart-where-unique.input';

@InputType()
export class shopping_cartUncheckedCreateNestedManyWithoutBookInput {

    @Field(() => [shopping_cartCreateWithoutBookInput], {nullable:true})
    @Type(() => shopping_cartCreateWithoutBookInput)
    create?: Array<shopping_cartCreateWithoutBookInput>;

    @Field(() => [shopping_cartCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => shopping_cartCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<shopping_cartCreateOrConnectWithoutBookInput>;

    @Field(() => shopping_cartCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => shopping_cartCreateManyBookInputEnvelope)
    createMany?: shopping_cartCreateManyBookInputEnvelope;

    @Field(() => [shopping_cartWhereUniqueInput], {nullable:true})
    @Type(() => shopping_cartWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<shopping_cartWhereUniqueInput, 'book_id_user_id'>>;
}

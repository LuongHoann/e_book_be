import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartCreateWithoutUserInput } from './shopping-cart-create-without-user.input';
import { Type } from 'class-transformer';
import { shopping_cartCreateOrConnectWithoutUserInput } from './shopping-cart-create-or-connect-without-user.input';
import { shopping_cartCreateManyUserInputEnvelope } from './shopping-cart-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { shopping_cartWhereUniqueInput } from './shopping-cart-where-unique.input';

@InputType()
export class shopping_cartUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [shopping_cartCreateWithoutUserInput], {nullable:true})
    @Type(() => shopping_cartCreateWithoutUserInput)
    create?: Array<shopping_cartCreateWithoutUserInput>;

    @Field(() => [shopping_cartCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => shopping_cartCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<shopping_cartCreateOrConnectWithoutUserInput>;

    @Field(() => shopping_cartCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => shopping_cartCreateManyUserInputEnvelope)
    createMany?: shopping_cartCreateManyUserInputEnvelope;

    @Field(() => [shopping_cartWhereUniqueInput], {nullable:true})
    @Type(() => shopping_cartWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<shopping_cartWhereUniqueInput, 'book_id_user_id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartCreateWithoutUserInput } from './shopping-cart-create-without-user.input';
import { Type } from 'class-transformer';
import { shopping_cartCreateOrConnectWithoutUserInput } from './shopping-cart-create-or-connect-without-user.input';
import { shopping_cartUpsertWithWhereUniqueWithoutUserInput } from './shopping-cart-upsert-with-where-unique-without-user.input';
import { shopping_cartCreateManyUserInputEnvelope } from './shopping-cart-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { shopping_cartWhereUniqueInput } from './shopping-cart-where-unique.input';
import { shopping_cartUpdateWithWhereUniqueWithoutUserInput } from './shopping-cart-update-with-where-unique-without-user.input';
import { shopping_cartUpdateManyWithWhereWithoutUserInput } from './shopping-cart-update-many-with-where-without-user.input';
import { shopping_cartScalarWhereInput } from './shopping-cart-scalar-where.input';

@InputType()
export class shopping_cartUpdateManyWithoutUserNestedInput {

    @Field(() => [shopping_cartCreateWithoutUserInput], {nullable:true})
    @Type(() => shopping_cartCreateWithoutUserInput)
    create?: Array<shopping_cartCreateWithoutUserInput>;

    @Field(() => [shopping_cartCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => shopping_cartCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<shopping_cartCreateOrConnectWithoutUserInput>;

    @Field(() => [shopping_cartUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => shopping_cartUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<shopping_cartUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => shopping_cartCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => shopping_cartCreateManyUserInputEnvelope)
    createMany?: shopping_cartCreateManyUserInputEnvelope;

    @Field(() => [shopping_cartWhereUniqueInput], {nullable:true})
    @Type(() => shopping_cartWhereUniqueInput)
    set?: Array<Prisma.AtLeast<shopping_cartWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [shopping_cartWhereUniqueInput], {nullable:true})
    @Type(() => shopping_cartWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<shopping_cartWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [shopping_cartWhereUniqueInput], {nullable:true})
    @Type(() => shopping_cartWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<shopping_cartWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [shopping_cartWhereUniqueInput], {nullable:true})
    @Type(() => shopping_cartWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<shopping_cartWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [shopping_cartUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => shopping_cartUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<shopping_cartUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [shopping_cartUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => shopping_cartUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<shopping_cartUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [shopping_cartScalarWhereInput], {nullable:true})
    @Type(() => shopping_cartScalarWhereInput)
    deleteMany?: Array<shopping_cartScalarWhereInput>;
}

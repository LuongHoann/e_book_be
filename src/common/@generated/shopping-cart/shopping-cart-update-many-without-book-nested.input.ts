import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartCreateWithoutBookInput } from './shopping-cart-create-without-book.input';
import { Type } from 'class-transformer';
import { shopping_cartCreateOrConnectWithoutBookInput } from './shopping-cart-create-or-connect-without-book.input';
import { shopping_cartUpsertWithWhereUniqueWithoutBookInput } from './shopping-cart-upsert-with-where-unique-without-book.input';
import { shopping_cartCreateManyBookInputEnvelope } from './shopping-cart-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { shopping_cartWhereUniqueInput } from './shopping-cart-where-unique.input';
import { shopping_cartUpdateWithWhereUniqueWithoutBookInput } from './shopping-cart-update-with-where-unique-without-book.input';
import { shopping_cartUpdateManyWithWhereWithoutBookInput } from './shopping-cart-update-many-with-where-without-book.input';
import { shopping_cartScalarWhereInput } from './shopping-cart-scalar-where.input';

@InputType()
export class shopping_cartUpdateManyWithoutBookNestedInput {

    @Field(() => [shopping_cartCreateWithoutBookInput], {nullable:true})
    @Type(() => shopping_cartCreateWithoutBookInput)
    create?: Array<shopping_cartCreateWithoutBookInput>;

    @Field(() => [shopping_cartCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => shopping_cartCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<shopping_cartCreateOrConnectWithoutBookInput>;

    @Field(() => [shopping_cartUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => shopping_cartUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<shopping_cartUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => shopping_cartCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => shopping_cartCreateManyBookInputEnvelope)
    createMany?: shopping_cartCreateManyBookInputEnvelope;

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

    @Field(() => [shopping_cartUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => shopping_cartUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<shopping_cartUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [shopping_cartUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => shopping_cartUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<shopping_cartUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [shopping_cartScalarWhereInput], {nullable:true})
    @Type(() => shopping_cartScalarWhereInput)
    deleteMany?: Array<shopping_cartScalarWhereInput>;
}

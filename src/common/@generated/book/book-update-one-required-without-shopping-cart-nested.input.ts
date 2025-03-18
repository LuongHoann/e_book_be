import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutShopping_cartInput } from './book-create-without-shopping-cart.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutShopping_cartInput } from './book-create-or-connect-without-shopping-cart.input';
import { bookUpsertWithoutShopping_cartInput } from './book-upsert-without-shopping-cart.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { bookUpdateToOneWithWhereWithoutShopping_cartInput } from './book-update-to-one-with-where-without-shopping-cart.input';

@InputType()
export class bookUpdateOneRequiredWithoutShopping_cartNestedInput {

    @Field(() => bookCreateWithoutShopping_cartInput, {nullable:true})
    @Type(() => bookCreateWithoutShopping_cartInput)
    create?: bookCreateWithoutShopping_cartInput;

    @Field(() => bookCreateOrConnectWithoutShopping_cartInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutShopping_cartInput)
    connectOrCreate?: bookCreateOrConnectWithoutShopping_cartInput;

    @Field(() => bookUpsertWithoutShopping_cartInput, {nullable:true})
    @Type(() => bookUpsertWithoutShopping_cartInput)
    upsert?: bookUpsertWithoutShopping_cartInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateToOneWithWhereWithoutShopping_cartInput, {nullable:true})
    @Type(() => bookUpdateToOneWithWhereWithoutShopping_cartInput)
    update?: bookUpdateToOneWithWhereWithoutShopping_cartInput;
}

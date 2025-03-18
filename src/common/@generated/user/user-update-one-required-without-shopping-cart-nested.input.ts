import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutShopping_cartInput } from './user-create-without-shopping-cart.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutShopping_cartInput } from './user-create-or-connect-without-shopping-cart.input';
import { userUpsertWithoutShopping_cartInput } from './user-upsert-without-shopping-cart.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { userUpdateToOneWithWhereWithoutShopping_cartInput } from './user-update-to-one-with-where-without-shopping-cart.input';

@InputType()
export class userUpdateOneRequiredWithoutShopping_cartNestedInput {

    @Field(() => userCreateWithoutShopping_cartInput, {nullable:true})
    @Type(() => userCreateWithoutShopping_cartInput)
    create?: userCreateWithoutShopping_cartInput;

    @Field(() => userCreateOrConnectWithoutShopping_cartInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutShopping_cartInput)
    connectOrCreate?: userCreateOrConnectWithoutShopping_cartInput;

    @Field(() => userUpsertWithoutShopping_cartInput, {nullable:true})
    @Type(() => userUpsertWithoutShopping_cartInput)
    upsert?: userUpsertWithoutShopping_cartInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userUpdateToOneWithWhereWithoutShopping_cartInput, {nullable:true})
    @Type(() => userUpdateToOneWithWhereWithoutShopping_cartInput)
    update?: userUpdateToOneWithWhereWithoutShopping_cartInput;
}

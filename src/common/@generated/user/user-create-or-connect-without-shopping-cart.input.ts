import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutShopping_cartInput } from './user-create-without-shopping-cart.input';

@InputType()
export class userCreateOrConnectWithoutShopping_cartInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutShopping_cartInput, {nullable:false})
    @Type(() => userCreateWithoutShopping_cartInput)
    create!: userCreateWithoutShopping_cartInput;
}

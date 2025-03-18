import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateWithoutShopping_cartInput } from './user-update-without-shopping-cart.input';
import { Type } from 'class-transformer';
import { userCreateWithoutShopping_cartInput } from './user-create-without-shopping-cart.input';
import { userWhereInput } from './user-where.input';

@InputType()
export class userUpsertWithoutShopping_cartInput {

    @Field(() => userUpdateWithoutShopping_cartInput, {nullable:false})
    @Type(() => userUpdateWithoutShopping_cartInput)
    update!: userUpdateWithoutShopping_cartInput;

    @Field(() => userCreateWithoutShopping_cartInput, {nullable:false})
    @Type(() => userCreateWithoutShopping_cartInput)
    create!: userCreateWithoutShopping_cartInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;
}

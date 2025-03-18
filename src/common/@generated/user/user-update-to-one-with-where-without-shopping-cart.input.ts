import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutShopping_cartInput } from './user-update-without-shopping-cart.input';

@InputType()
export class userUpdateToOneWithWhereWithoutShopping_cartInput {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => userUpdateWithoutShopping_cartInput, {nullable:false})
    @Type(() => userUpdateWithoutShopping_cartInput)
    data!: userUpdateWithoutShopping_cartInput;
}

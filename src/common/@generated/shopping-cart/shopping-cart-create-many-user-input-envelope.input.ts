import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartCreateManyUserInput } from './shopping-cart-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class shopping_cartCreateManyUserInputEnvelope {

    @Field(() => [shopping_cartCreateManyUserInput], {nullable:false})
    @Type(() => shopping_cartCreateManyUserInput)
    data!: Array<shopping_cartCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartScalarWhereInput } from './shopping-cart-scalar-where.input';
import { Type } from 'class-transformer';
import { shopping_cartUncheckedUpdateManyWithoutUserInput } from './shopping-cart-unchecked-update-many-without-user.input';

@InputType()
export class shopping_cartUpdateManyWithWhereWithoutUserInput {

    @Field(() => shopping_cartScalarWhereInput, {nullable:false})
    @Type(() => shopping_cartScalarWhereInput)
    where!: shopping_cartScalarWhereInput;

    @Field(() => shopping_cartUncheckedUpdateManyWithoutUserInput, {nullable:false})
    @Type(() => shopping_cartUncheckedUpdateManyWithoutUserInput)
    data!: shopping_cartUncheckedUpdateManyWithoutUserInput;
}

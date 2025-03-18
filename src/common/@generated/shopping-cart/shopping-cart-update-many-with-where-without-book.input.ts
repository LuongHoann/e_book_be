import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartScalarWhereInput } from './shopping-cart-scalar-where.input';
import { Type } from 'class-transformer';
import { shopping_cartUncheckedUpdateManyWithoutBookInput } from './shopping-cart-unchecked-update-many-without-book.input';

@InputType()
export class shopping_cartUpdateManyWithWhereWithoutBookInput {

    @Field(() => shopping_cartScalarWhereInput, {nullable:false})
    @Type(() => shopping_cartScalarWhereInput)
    where!: shopping_cartScalarWhereInput;

    @Field(() => shopping_cartUncheckedUpdateManyWithoutBookInput, {nullable:false})
    @Type(() => shopping_cartUncheckedUpdateManyWithoutBookInput)
    data!: shopping_cartUncheckedUpdateManyWithoutBookInput;
}

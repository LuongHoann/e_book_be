import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutBook_discountInput } from './book-update-without-book-discount.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutBook_discountInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutBook_discountInput, {nullable:false})
    @Type(() => bookUpdateWithoutBook_discountInput)
    data!: bookUpdateWithoutBook_discountInput;
}

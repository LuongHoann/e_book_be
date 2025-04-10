import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountScalarWhereInput } from './book-discount-scalar-where.input';
import { Type } from 'class-transformer';
import { book_discountUncheckedUpdateManyWithoutBookInput } from './book-discount-unchecked-update-many-without-book.input';

@InputType()
export class book_discountUpdateManyWithWhereWithoutBookInput {

    @Field(() => book_discountScalarWhereInput, {nullable:false})
    @Type(() => book_discountScalarWhereInput)
    where!: book_discountScalarWhereInput;

    @Field(() => book_discountUncheckedUpdateManyWithoutBookInput, {nullable:false})
    @Type(() => book_discountUncheckedUpdateManyWithoutBookInput)
    data!: book_discountUncheckedUpdateManyWithoutBookInput;
}

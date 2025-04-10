import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountScalarWhereInput } from './book-discount-scalar-where.input';
import { Type } from 'class-transformer';
import { book_discountUncheckedUpdateManyWithoutDiscount_codeInput } from './book-discount-unchecked-update-many-without-discount-code.input';

@InputType()
export class book_discountUpdateManyWithWhereWithoutDiscount_codeInput {

    @Field(() => book_discountScalarWhereInput, {nullable:false})
    @Type(() => book_discountScalarWhereInput)
    where!: book_discountScalarWhereInput;

    @Field(() => book_discountUncheckedUpdateManyWithoutDiscount_codeInput, {nullable:false})
    @Type(() => book_discountUncheckedUpdateManyWithoutDiscount_codeInput)
    data!: book_discountUncheckedUpdateManyWithoutDiscount_codeInput;
}

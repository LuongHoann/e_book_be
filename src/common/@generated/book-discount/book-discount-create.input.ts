import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutBook_discountInput } from '../book/book-create-nested-one-without-book-discount.input';
import { discount_codeCreateNestedOneWithoutBook_discountInput } from '../discount-code/discount-code-create-nested-one-without-book-discount.input';
import { Type } from 'class-transformer';

@InputType()
export class book_discountCreateInput {

    @Field(() => bookCreateNestedOneWithoutBook_discountInput, {nullable:false})
    book!: bookCreateNestedOneWithoutBook_discountInput;

    @Field(() => discount_codeCreateNestedOneWithoutBook_discountInput, {nullable:true})
    @Type(() => discount_codeCreateNestedOneWithoutBook_discountInput)
    discount_code?: discount_codeCreateNestedOneWithoutBook_discountInput;
}

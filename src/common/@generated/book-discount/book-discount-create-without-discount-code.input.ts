import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutBook_discountInput } from '../book/book-create-nested-one-without-book-discount.input';

@InputType()
export class book_discountCreateWithoutDiscount_codeInput {

    @Field(() => bookCreateNestedOneWithoutBook_discountInput, {nullable:false})
    book!: bookCreateNestedOneWithoutBook_discountInput;
}

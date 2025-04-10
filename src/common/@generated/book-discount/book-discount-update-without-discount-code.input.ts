import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutBook_discountNestedInput } from '../book/book-update-one-required-without-book-discount-nested.input';

@InputType()
export class book_discountUpdateWithoutDiscount_codeInput {

    @Field(() => bookUpdateOneRequiredWithoutBook_discountNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutBook_discountNestedInput;
}

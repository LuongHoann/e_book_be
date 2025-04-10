import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutBook_discountNestedInput } from '../book/book-update-one-required-without-book-discount-nested.input';
import { discount_codeUpdateOneRequiredWithoutBook_discountNestedInput } from '../discount-code/discount-code-update-one-required-without-book-discount-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class book_discountUpdateInput {

    @Field(() => bookUpdateOneRequiredWithoutBook_discountNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutBook_discountNestedInput;

    @Field(() => discount_codeUpdateOneRequiredWithoutBook_discountNestedInput, {nullable:true})
    @Type(() => discount_codeUpdateOneRequiredWithoutBook_discountNestedInput)
    discount_code?: discount_codeUpdateOneRequiredWithoutBook_discountNestedInput;
}

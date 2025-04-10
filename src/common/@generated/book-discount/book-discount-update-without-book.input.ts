import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeUpdateOneRequiredWithoutBook_discountNestedInput } from '../discount-code/discount-code-update-one-required-without-book-discount-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class book_discountUpdateWithoutBookInput {

    @Field(() => discount_codeUpdateOneRequiredWithoutBook_discountNestedInput, {nullable:true})
    @Type(() => discount_codeUpdateOneRequiredWithoutBook_discountNestedInput)
    discount_code?: discount_codeUpdateOneRequiredWithoutBook_discountNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeCreateNestedOneWithoutBook_discountInput } from '../discount-code/discount-code-create-nested-one-without-book-discount.input';
import { Type } from 'class-transformer';

@InputType()
export class book_discountCreateWithoutBookInput {

    @Field(() => discount_codeCreateNestedOneWithoutBook_discountInput, {nullable:true})
    @Type(() => discount_codeCreateNestedOneWithoutBook_discountInput)
    discount_code?: discount_codeCreateNestedOneWithoutBook_discountInput;
}

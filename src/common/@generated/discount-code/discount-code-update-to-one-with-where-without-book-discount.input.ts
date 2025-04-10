import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeWhereInput } from './discount-code-where.input';
import { Type } from 'class-transformer';
import { discount_codeUpdateWithoutBook_discountInput } from './discount-code-update-without-book-discount.input';

@InputType()
export class discount_codeUpdateToOneWithWhereWithoutBook_discountInput {

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    where?: discount_codeWhereInput;

    @Field(() => discount_codeUpdateWithoutBook_discountInput, {nullable:false})
    @Type(() => discount_codeUpdateWithoutBook_discountInput)
    data!: discount_codeUpdateWithoutBook_discountInput;
}

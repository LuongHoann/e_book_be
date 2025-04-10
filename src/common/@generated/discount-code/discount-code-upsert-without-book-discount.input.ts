import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeUpdateWithoutBook_discountInput } from './discount-code-update-without-book-discount.input';
import { Type } from 'class-transformer';
import { discount_codeCreateWithoutBook_discountInput } from './discount-code-create-without-book-discount.input';
import { discount_codeWhereInput } from './discount-code-where.input';

@InputType()
export class discount_codeUpsertWithoutBook_discountInput {

    @Field(() => discount_codeUpdateWithoutBook_discountInput, {nullable:false})
    @Type(() => discount_codeUpdateWithoutBook_discountInput)
    update!: discount_codeUpdateWithoutBook_discountInput;

    @Field(() => discount_codeCreateWithoutBook_discountInput, {nullable:false})
    @Type(() => discount_codeCreateWithoutBook_discountInput)
    create!: discount_codeCreateWithoutBook_discountInput;

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    where?: discount_codeWhereInput;
}

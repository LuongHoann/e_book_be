import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { book_discountCreateInput } from '../book-discount/book-discount-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnebookDiscountArgs {

    @Field(() => book_discountCreateInput, {nullable:false})
    @Type(() => book_discountCreateInput)
    data!: book_discountCreateInput;
}

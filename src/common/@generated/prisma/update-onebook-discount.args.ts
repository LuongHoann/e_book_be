import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { book_discountUpdateInput } from '../book-discount/book-discount-update.input';
import { Type } from 'class-transformer';
import { book_discountWhereUniqueInput } from '../book-discount/book-discount-where-unique.input';

@ArgsType()
export class UpdateOnebookDiscountArgs {

    @Field(() => book_discountUpdateInput, {nullable:false})
    @Type(() => book_discountUpdateInput)
    data!: book_discountUpdateInput;

    @Field(() => book_discountWhereUniqueInput, {nullable:false})
    @Type(() => book_discountWhereUniqueInput)
    where!: book_discountWhereUniqueInput;
}

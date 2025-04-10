import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { book_discountWhereUniqueInput } from '../book-discount/book-discount-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquebookDiscountOrThrowArgs {

    @Field(() => book_discountWhereUniqueInput, {nullable:false})
    @Type(() => book_discountWhereUniqueInput)
    where!: book_discountWhereUniqueInput;
}

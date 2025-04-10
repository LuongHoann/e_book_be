import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { book_discountWhereUniqueInput } from '../book-discount/book-discount-where-unique.input';
import { Type } from 'class-transformer';
import { book_discountCreateInput } from '../book-discount/book-discount-create.input';
import { book_discountUpdateInput } from '../book-discount/book-discount-update.input';

@ArgsType()
export class UpsertOnebookDiscountArgs {

    @Field(() => book_discountWhereUniqueInput, {nullable:false})
    @Type(() => book_discountWhereUniqueInput)
    where!: book_discountWhereUniqueInput;

    @Field(() => book_discountCreateInput, {nullable:false})
    @Type(() => book_discountCreateInput)
    create!: book_discountCreateInput;

    @Field(() => book_discountUpdateInput, {nullable:false})
    @Type(() => book_discountUpdateInput)
    update!: book_discountUpdateInput;
}

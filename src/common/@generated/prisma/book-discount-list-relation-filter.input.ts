import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountWhereInput } from '../book-discount/book-discount-where.input';

@InputType()
export class Book_discountListRelationFilter {

    @Field(() => book_discountWhereInput, {nullable:true})
    every?: book_discountWhereInput;

    @Field(() => book_discountWhereInput, {nullable:true})
    some?: book_discountWhereInput;

    @Field(() => book_discountWhereInput, {nullable:true})
    none?: book_discountWhereInput;
}

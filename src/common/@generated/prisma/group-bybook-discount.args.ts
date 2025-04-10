import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { book_discountWhereInput } from '../book-discount/book-discount-where.input';
import { Type } from 'class-transformer';
import { book_discountOrderByWithAggregationInput } from '../book-discount/book-discount-order-by-with-aggregation.input';
import { Book_discountScalarFieldEnum } from './book-discount-scalar-field.enum';
import { book_discountScalarWhereWithAggregatesInput } from '../book-discount/book-discount-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBybookDiscountArgs {

    @Field(() => book_discountWhereInput, {nullable:true})
    @Type(() => book_discountWhereInput)
    where?: book_discountWhereInput;

    @Field(() => [book_discountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<book_discountOrderByWithAggregationInput>;

    @Field(() => [Book_discountScalarFieldEnum], {nullable:false})
    by!: Array<`${Book_discountScalarFieldEnum}`>;

    @Field(() => book_discountScalarWhereWithAggregatesInput, {nullable:true})
    having?: book_discountScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

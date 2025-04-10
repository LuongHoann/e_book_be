import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { book_discountWhereInput } from '../book-discount/book-discount-where.input';
import { Type } from 'class-transformer';
import { book_discountOrderByWithRelationInput } from '../book-discount/book-discount-order-by-with-relation.input';
import { book_discountWhereUniqueInput } from '../book-discount/book-discount-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Book_discountScalarFieldEnum } from './book-discount-scalar-field.enum';

@ArgsType()
export class FindManybookDiscountArgs {

    @Field(() => book_discountWhereInput, {nullable:true})
    @Type(() => book_discountWhereInput)
    where?: book_discountWhereInput;

    @Field(() => [book_discountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<book_discountOrderByWithRelationInput>;

    @Field(() => book_discountWhereUniqueInput, {nullable:true})
    cursor?: book_discountWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Book_discountScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Book_discountScalarFieldEnum}`>;
}

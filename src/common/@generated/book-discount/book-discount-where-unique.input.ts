import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountBook_idDiscount_idCompoundUniqueInput } from './book-discount-book-id-discount-id-compound-unique.input';
import { book_discountWhereInput } from './book-discount-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { Discount_codeScalarRelationFilter } from '../prisma/discount-code-scalar-relation-filter.input';

@InputType()
export class book_discountWhereUniqueInput {

    @Field(() => book_discountBook_idDiscount_idCompoundUniqueInput, {nullable:true})
    book_id_discount_id?: book_discountBook_idDiscount_idCompoundUniqueInput;

    @Field(() => [book_discountWhereInput], {nullable:true})
    AND?: Array<book_discountWhereInput>;

    @Field(() => [book_discountWhereInput], {nullable:true})
    OR?: Array<book_discountWhereInput>;

    @Field(() => [book_discountWhereInput], {nullable:true})
    NOT?: Array<book_discountWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => IntFilter, {nullable:true})
    discount_id?: IntFilter;

    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: BookScalarRelationFilter;

    @Field(() => Discount_codeScalarRelationFilter, {nullable:true})
    discount_code?: Discount_codeScalarRelationFilter;
}

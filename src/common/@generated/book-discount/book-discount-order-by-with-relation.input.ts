import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { bookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { discount_codeOrderByWithRelationInput } from '../discount-code/discount-code-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class book_discountOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount_id?: `${SortOrder}`;

    @Field(() => bookOrderByWithRelationInput, {nullable:true})
    book?: bookOrderByWithRelationInput;

    @Field(() => discount_codeOrderByWithRelationInput, {nullable:true})
    @Type(() => discount_codeOrderByWithRelationInput)
    discount_code?: discount_codeOrderByWithRelationInput;
}

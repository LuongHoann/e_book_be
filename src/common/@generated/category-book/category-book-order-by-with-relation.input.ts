import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { bookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { categoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';

@InputType()
export class category_bookOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    category?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => bookOrderByWithRelationInput, {nullable:true})
    book?: bookOrderByWithRelationInput;

    @Field(() => categoryOrderByWithRelationInput, {nullable:true})
    category_category_book_categoryTocategory?: categoryOrderByWithRelationInput;
}

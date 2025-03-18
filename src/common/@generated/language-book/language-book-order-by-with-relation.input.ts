import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { bookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { languageOrderByWithRelationInput } from '../language/language-order-by-with-relation.input';

@InputType()
export class language_bookOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    language_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => bookOrderByWithRelationInput, {nullable:true})
    @Type(() => bookOrderByWithRelationInput)
    book?: bookOrderByWithRelationInput;

    @Field(() => languageOrderByWithRelationInput, {nullable:true})
    language?: languageOrderByWithRelationInput;
}

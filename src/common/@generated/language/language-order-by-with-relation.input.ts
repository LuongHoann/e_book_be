import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { language_bookOrderByRelationAggregateInput } from '../language-book/language-book-order-by-relation-aggregate.input';

@InputType()
export class languageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    language_name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    language_code?: `${SortOrder}`;

    @Field(() => language_bookOrderByRelationAggregateInput, {nullable:true})
    language_book?: language_bookOrderByRelationAggregateInput;
}

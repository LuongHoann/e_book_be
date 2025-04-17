import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class category_bookScalarWhereWithAggregatesInput {

    @Field(() => [category_bookScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<category_bookScalarWhereWithAggregatesInput>;

    @Field(() => [category_bookScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<category_bookScalarWhereWithAggregatesInput>;

    @Field(() => [category_bookScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<category_bookScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    category_id?: IntWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;
}

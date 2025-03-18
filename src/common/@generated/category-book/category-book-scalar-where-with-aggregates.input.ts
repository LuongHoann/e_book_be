import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class category_bookScalarWhereWithAggregatesInput {

    @Field(() => [category_bookScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<category_bookScalarWhereWithAggregatesInput>;

    @Field(() => [category_bookScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<category_bookScalarWhereWithAggregatesInput>;

    @Field(() => [category_bookScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<category_bookScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category?: StringWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;
}

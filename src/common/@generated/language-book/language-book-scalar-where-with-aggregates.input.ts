import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class language_bookScalarWhereWithAggregatesInput {

    @Field(() => [language_bookScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<language_bookScalarWhereWithAggregatesInput>;

    @Field(() => [language_bookScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<language_bookScalarWhereWithAggregatesInput>;

    @Field(() => [language_bookScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<language_bookScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    language_id?: IntWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;
}

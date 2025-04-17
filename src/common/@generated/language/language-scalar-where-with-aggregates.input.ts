import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class languageScalarWhereWithAggregatesInput {

    @Field(() => [languageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<languageScalarWhereWithAggregatesInput>;

    @Field(() => [languageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<languageScalarWhereWithAggregatesInput>;

    @Field(() => [languageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<languageScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;
}

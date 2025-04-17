import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class categoryScalarWhereWithAggregatesInput {

    @Field(() => [categoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<categoryScalarWhereWithAggregatesInput>;

    @Field(() => [categoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<categoryScalarWhereWithAggregatesInput>;

    @Field(() => [categoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<categoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;
}

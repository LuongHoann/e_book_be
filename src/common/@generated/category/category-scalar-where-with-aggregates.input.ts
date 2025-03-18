import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class categoryScalarWhereWithAggregatesInput {

    @Field(() => [categoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<categoryScalarWhereWithAggregatesInput>;

    @Field(() => [categoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<categoryScalarWhereWithAggregatesInput>;

    @Field(() => [categoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<categoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}

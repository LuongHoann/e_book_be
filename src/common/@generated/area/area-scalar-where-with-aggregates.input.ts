import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class areaScalarWhereWithAggregatesInput {

    @Field(() => [areaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<areaScalarWhereWithAggregatesInput>;

    @Field(() => [areaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<areaScalarWhereWithAggregatesInput>;

    @Field(() => [areaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<areaScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class roleScalarWhereWithAggregatesInput {

    @Field(() => [roleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<roleScalarWhereWithAggregatesInput>;

    @Field(() => [roleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<roleScalarWhereWithAggregatesInput>;

    @Field(() => [roleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<roleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    role_name?: StringWithAggregatesFilter;
}

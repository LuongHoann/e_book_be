import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class permissionScalarWhereWithAggregatesInput {

    @Field(() => [permissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<permissionScalarWhereWithAggregatesInput>;

    @Field(() => [permissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<permissionScalarWhereWithAggregatesInput>;

    @Field(() => [permissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<permissionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    role_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;
}

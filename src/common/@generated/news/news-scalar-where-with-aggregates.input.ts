import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class newsScalarWhereWithAggregatesInput {

    @Field(() => [newsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<newsScalarWhereWithAggregatesInput>;

    @Field(() => [newsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<newsScalarWhereWithAggregatesInput>;

    @Field(() => [newsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<newsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    publish_date?: DateTimeNullableWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;
}

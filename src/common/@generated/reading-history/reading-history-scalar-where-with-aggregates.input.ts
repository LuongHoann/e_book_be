import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class reading_historyScalarWhereWithAggregatesInput {

    @Field(() => [reading_historyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<reading_historyScalarWhereWithAggregatesInput>;

    @Field(() => [reading_historyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<reading_historyScalarWhereWithAggregatesInput>;

    @Field(() => [reading_historyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<reading_historyScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    state?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    page?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    update_at?: DateTimeNullableWithAggregatesFilter;
}

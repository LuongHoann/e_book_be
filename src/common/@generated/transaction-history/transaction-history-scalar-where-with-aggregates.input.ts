import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class transaction_historyScalarWhereWithAggregatesInput {

    @Field(() => [transaction_historyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<transaction_historyScalarWhereWithAggregatesInput>;

    @Field(() => [transaction_historyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<transaction_historyScalarWhereWithAggregatesInput>;

    @Field(() => [transaction_historyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<transaction_historyScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    payment_date?: DateTimeNullableWithAggregatesFilter;
}

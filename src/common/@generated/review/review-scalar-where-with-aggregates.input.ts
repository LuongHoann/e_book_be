import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class reviewScalarWhereWithAggregatesInput {

    @Field(() => [reviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<reviewScalarWhereWithAggregatesInput>;

    @Field(() => [reviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<reviewScalarWhereWithAggregatesInput>;

    @Field(() => [reviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<reviewScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rating?: IntWithAggregatesFilter;
}

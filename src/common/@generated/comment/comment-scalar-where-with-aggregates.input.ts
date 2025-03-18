import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class commentScalarWhereWithAggregatesInput {

    @Field(() => [commentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<commentScalarWhereWithAggregatesInput>;

    @Field(() => [commentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<commentScalarWhereWithAggregatesInput>;

    @Field(() => [commentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<commentScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    content?: StringNullableWithAggregatesFilter;
}

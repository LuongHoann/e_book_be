import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class book_discountScalarWhereWithAggregatesInput {

    @Field(() => [book_discountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<book_discountScalarWhereWithAggregatesInput>;

    @Field(() => [book_discountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<book_discountScalarWhereWithAggregatesInput>;

    @Field(() => [book_discountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<book_discountScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    discount_id?: IntWithAggregatesFilter;
}

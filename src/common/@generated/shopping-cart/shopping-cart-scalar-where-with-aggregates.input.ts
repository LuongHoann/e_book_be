import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class shopping_cartScalarWhereWithAggregatesInput {

    @Field(() => [shopping_cartScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<shopping_cartScalarWhereWithAggregatesInput>;

    @Field(() => [shopping_cartScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<shopping_cartScalarWhereWithAggregatesInput>;

    @Field(() => [shopping_cartScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<shopping_cartScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;
}

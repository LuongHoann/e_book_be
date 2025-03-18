import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class favouriteScalarWhereWithAggregatesInput {

    @Field(() => [favouriteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<favouriteScalarWhereWithAggregatesInput>;

    @Field(() => [favouriteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<favouriteScalarWhereWithAggregatesInput>;

    @Field(() => [favouriteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<favouriteScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    book_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;
}

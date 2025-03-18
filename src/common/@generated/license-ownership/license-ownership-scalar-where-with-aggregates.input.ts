import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class license_ownershipScalarWhereWithAggregatesInput {

    @Field(() => [license_ownershipScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<license_ownershipScalarWhereWithAggregatesInput>;

    @Field(() => [license_ownershipScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<license_ownershipScalarWhereWithAggregatesInput>;

    @Field(() => [license_ownershipScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<license_ownershipScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    license_id?: UuidWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    download_count?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiration_date?: DateTimeWithAggregatesFilter;
}

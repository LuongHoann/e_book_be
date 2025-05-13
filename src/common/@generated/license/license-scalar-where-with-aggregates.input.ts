import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class licenseScalarWhereWithAggregatesInput {

    @Field(() => [licenseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<licenseScalarWhereWithAggregatesInput>;

    @Field(() => [licenseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<licenseScalarWhereWithAggregatesInput>;

    @Field(() => [licenseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<licenseScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    book_id?: UuidNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    license_type_id?: UuidNullableWithAggregatesFilter;
}

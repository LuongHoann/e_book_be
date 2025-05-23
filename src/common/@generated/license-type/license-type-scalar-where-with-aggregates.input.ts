import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class license_typeScalarWhereWithAggregatesInput {

    @Field(() => [license_typeScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => license_typeScalarWhereWithAggregatesInput)
    AND?: Array<license_typeScalarWhereWithAggregatesInput>;

    @Field(() => [license_typeScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => license_typeScalarWhereWithAggregatesInput)
    OR?: Array<license_typeScalarWhereWithAggregatesInput>;

    @Field(() => [license_typeScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => license_typeScalarWhereWithAggregatesInput)
    NOT?: Array<license_typeScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    download_count?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    status?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    duration?: IntNullableWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class discount_codeScalarWhereWithAggregatesInput {

    @Field(() => [discount_codeScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => discount_codeScalarWhereWithAggregatesInput)
    AND?: Array<discount_codeScalarWhereWithAggregatesInput>;

    @Field(() => [discount_codeScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => discount_codeScalarWhereWithAggregatesInput)
    OR?: Array<discount_codeScalarWhereWithAggregatesInput>;

    @Field(() => [discount_codeScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => discount_codeScalarWhereWithAggregatesInput)
    NOT?: Array<discount_codeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    value?: DecimalNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    value_percent?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    area_code?: StringNullableWithAggregatesFilter;
}

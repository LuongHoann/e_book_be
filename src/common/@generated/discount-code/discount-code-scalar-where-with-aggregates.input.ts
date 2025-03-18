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
    discount_code_name?: StringNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    discount_value?: DecimalNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    discount_value_percent?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    area_name?: StringNullableWithAggregatesFilter;
}

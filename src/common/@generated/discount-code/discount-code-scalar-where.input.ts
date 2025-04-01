import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class discount_codeScalarWhereInput {

    @Field(() => [discount_codeScalarWhereInput], {nullable:true})
    @Type(() => discount_codeScalarWhereInput)
    AND?: Array<discount_codeScalarWhereInput>;

    @Field(() => [discount_codeScalarWhereInput], {nullable:true})
    @Type(() => discount_codeScalarWhereInput)
    OR?: Array<discount_codeScalarWhereInput>;

    @Field(() => [discount_codeScalarWhereInput], {nullable:true})
    @Type(() => discount_codeScalarWhereInput)
    NOT?: Array<discount_codeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    discount_code_name?: StringNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    discount_value?: DecimalNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    discount_value_percent?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    area_code?: StringNullableFilter;
}

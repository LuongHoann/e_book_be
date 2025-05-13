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
    name?: StringNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    value?: DecimalNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    value_percent?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    area_code?: StringNullableFilter;
}

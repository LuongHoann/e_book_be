import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BookListRelationFilter } from '../prisma/book-list-relation-filter.input';
import { AreaNullableScalarRelationFilter } from '../prisma/area-nullable-scalar-relation-filter.input';

@InputType()
export class discount_codeWhereInput {

    @Field(() => [discount_codeWhereInput], {nullable:true})
    @Type(() => discount_codeWhereInput)
    AND?: Array<discount_codeWhereInput>;

    @Field(() => [discount_codeWhereInput], {nullable:true})
    @Type(() => discount_codeWhereInput)
    OR?: Array<discount_codeWhereInput>;

    @Field(() => [discount_codeWhereInput], {nullable:true})
    @Type(() => discount_codeWhereInput)
    NOT?: Array<discount_codeWhereInput>;

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
    area_name?: StringNullableFilter;

    @Field(() => BookListRelationFilter, {nullable:true})
    @Type(() => BookListRelationFilter)
    book?: BookListRelationFilter;

    @Field(() => AreaNullableScalarRelationFilter, {nullable:true})
    @Type(() => AreaNullableScalarRelationFilter)
    area?: AreaNullableScalarRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Book_discountListRelationFilter } from '../prisma/book-discount-list-relation-filter.input';
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
    name?: StringNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    value?: DecimalNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    value_percent?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    area_code?: StringNullableFilter;

    @Field(() => Book_discountListRelationFilter, {nullable:true})
    @Type(() => Book_discountListRelationFilter)
    book_discount?: Book_discountListRelationFilter;

    @Field(() => AreaNullableScalarRelationFilter, {nullable:true})
    @Type(() => AreaNullableScalarRelationFilter)
    area?: AreaNullableScalarRelationFilter;
}

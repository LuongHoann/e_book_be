import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Discount_codeListRelationFilter } from '../prisma/discount-code-list-relation-filter.input';

@InputType()
export class areaWhereInput {

    @Field(() => [areaWhereInput], {nullable:true})
    AND?: Array<areaWhereInput>;

    @Field(() => [areaWhereInput], {nullable:true})
    OR?: Array<areaWhereInput>;

    @Field(() => [areaWhereInput], {nullable:true})
    NOT?: Array<areaWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => Discount_codeListRelationFilter, {nullable:true})
    discount_code?: Discount_codeListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
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
    area_name?: StringFilter;

    @Field(() => Discount_codeListRelationFilter, {nullable:true})
    discount_code?: Discount_codeListRelationFilter;
}
